import * as THREE from 'three';

import type { GraphData, GraphEdge } from '../types';

type NodePosition = { x: number; y: number; z: number };

type PathEntry = {
  mesh: THREE.Mesh;
  curve: THREE.CatmullRomCurve3;
  material: THREE.MeshStandardMaterial;
};

const TUBULAR_SEGMENTS = 64;
const RADIAL_SEGMENTS = 6;
const BASE_COLOR = '#88ccff';
const HIGHLIGHTED_COLOR = '#ffffff';
const TUBE_RADIUS = 0.08;
const BASE_OPACITY = 0.7;
const HIGHLIGHTED_OPACITY = 1.0;
const DIMMED_OPACITY = 0.06;
const EDGE_OFFSET_STEP = 0.15;
const POSITION_CHANGE_THRESHOLD = 0.05;

export class PathRenderer {
  private readonly pathByTraineeId = new Map<string, PathEntry>();

  private readonly edgeByPairKey = new Map<string, GraphEdge>();

  private data: GraphData | null = null;

  private previousNodePositions = new Map<string, THREE.Vector3>();

  createPaths(data: GraphData, scene: THREE.Scene): void {
    this.disposePaths();

    this.data = data;
    this.edgeByPairKey.clear();
    this.buildEdgeLookup(data.edges);

    const nodePositions = this.mapPositionsFromData(data);

    data.trainees.forEach((trainee, traineeIndex) => {
      const controlPoints = this.buildOffsetControlPoints(
        trainee.nodeSequence,
        trainee.id,
        traineeIndex,
        nodePositions,
      );

      if (controlPoints.length < 2) {
        return;
      }

      const curve = new THREE.CatmullRomCurve3(controlPoints, false, 'centripetal');
      const geometry = new THREE.TubeGeometry(
        curve,
        TUBULAR_SEGMENTS,
        TUBE_RADIUS,
        RADIAL_SEGMENTS,
        false,
      );
      const material = new THREE.MeshStandardMaterial({
        color: BASE_COLOR,
        transparent: true,
        opacity: BASE_OPACITY,
        emissive: BASE_COLOR,
        emissiveIntensity: 0.6,
        roughness: 0.4,
        metalness: 0.1,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      this.pathByTraineeId.set(trainee.id, {
        mesh,
        curve,
        material,
      });
    });

    this.previousNodePositions = this.cloneNodePositionMap(nodePositions);
  }

  updatePaths(nodePositions: Map<string, NodePosition>): void {
    if (!this.data) {
      return;
    }

    if (!this.hasSignificantMovement(nodePositions)) {
      return;
    }

    this.data.trainees.forEach((trainee, traineeIndex) => {
      const pathEntry = this.pathByTraineeId.get(trainee.id);
      if (!pathEntry) {
        return;
      }

      const controlPoints = this.buildOffsetControlPoints(
        trainee.nodeSequence,
        trainee.id,
        traineeIndex,
        nodePositions,
      );

      if (controlPoints.length < 2) {
        return;
      }

      const curve = new THREE.CatmullRomCurve3(controlPoints, false, 'centripetal');
      const nextGeometry = new THREE.TubeGeometry(
        curve,
        TUBULAR_SEGMENTS,
        TUBE_RADIUS,
        RADIAL_SEGMENTS,
        false,
      );

      pathEntry.mesh.geometry.dispose();
      pathEntry.mesh.geometry = nextGeometry;
      pathEntry.curve = curve;
    });

    this.previousNodePositions = this.cloneNodePositionMap(nodePositions);
  }

  highlightTrainee(traineeId: string): void {
    for (const [id, path] of this.pathByTraineeId) {
      const isHighlighted = id === traineeId;
      path.material.opacity = isHighlighted ? HIGHLIGHTED_OPACITY : DIMMED_OPACITY;
      path.material.color.set(isHighlighted ? HIGHLIGHTED_COLOR : BASE_COLOR);
    }
  }

  resetHighlights(): void {
    for (const path of this.pathByTraineeId.values()) {
      path.material.opacity = BASE_OPACITY;
      path.material.color.set(BASE_COLOR);
    }
  }

  getCurves(): Map<string, THREE.CatmullRomCurve3> {
    const curves = new Map<string, THREE.CatmullRomCurve3>();

    for (const [traineeId, path] of this.pathByTraineeId) {
      curves.set(traineeId, path.curve);
    }

    return curves;
  }

  private disposePaths(): void {
    for (const path of this.pathByTraineeId.values()) {
      path.mesh.parent?.remove(path.mesh);
      path.mesh.geometry.dispose();
      path.material.dispose();
    }

    this.pathByTraineeId.clear();
  }

  private buildEdgeLookup(edges: GraphEdge[]): void {
    for (const edge of edges) {
      this.edgeByPairKey.set(this.makeEdgePairKey(edge.source, edge.target), edge);
      this.edgeByPairKey.set(this.makeEdgePairKey(edge.target, edge.source), edge);
    }
  }

  private buildOffsetControlPoints(
    nodeSequence: string[],
    traineeId: string,
    traineeIndex: number,
    nodePositions: Map<string, NodePosition>,
  ): THREE.Vector3[] {
    const basePoints: THREE.Vector3[] = [];

    for (const nodeId of nodeSequence) {
      const point = nodePositions.get(nodeId);
      if (!point) {
        continue;
      }

      basePoints.push(new THREE.Vector3(point.x, point.y, point.z));
    }

    if (basePoints.length < 2) {
      return [];
    }

    const offsetsByIndex: THREE.Vector3[] = [];

    for (let i = 0; i < nodeSequence.length - 1; i += 1) {
      const fromNodeId = nodeSequence[i];
      const toNodeId = nodeSequence[i + 1];

      const from = nodePositions.get(fromNodeId);
      const to = nodePositions.get(toNodeId);
      if (!from || !to) {
        offsetsByIndex.push(new THREE.Vector3());
        continue;
      }

      const offset = this.computeEdgeOffset(
        from,
        to,
        fromNodeId,
        toNodeId,
        traineeId,
        traineeIndex,
      );

      offsetsByIndex.push(offset);
    }

    const result: THREE.Vector3[] = [];

    for (let i = 0; i < basePoints.length; i += 1) {
      let offset = new THREE.Vector3();

      if (i === 0) {
        offset = offsetsByIndex[0]?.clone() ?? offset;
      } else if (i === basePoints.length - 1) {
        offset = offsetsByIndex[offsetsByIndex.length - 1]?.clone() ?? offset;
      } else {
        const prevOffset = offsetsByIndex[i - 1] ?? new THREE.Vector3();
        const nextOffset = offsetsByIndex[i] ?? new THREE.Vector3();
        offset = prevOffset.clone().add(nextOffset).multiplyScalar(0.5);
      }

      result.push(basePoints[i].clone().add(offset));
    }

    return result;
  }

  private computeEdgeOffset(
    from: NodePosition,
    to: NodePosition,
    sourceId: string,
    targetId: string,
    traineeId: string,
    traineeIndex: number,
  ): THREE.Vector3 {
    const edge = this.edgeByPairKey.get(this.makeEdgePairKey(sourceId, targetId));

    const sharedCount = Math.max(edge?.traineeIds.length ?? 1, 1);
    const edgeIndexRaw = edge?.traineeIds.indexOf(traineeId);
    const edgeIndex =
      edgeIndexRaw !== undefined && edgeIndexRaw >= 0
        ? edgeIndexRaw
        : traineeIndex % sharedCount;

    const centered = edgeIndex - (sharedCount - 1) / 2;
    const magnitude = centered * EDGE_OFFSET_STEP;

    const dy = to.y - from.y;
    const dz = to.z - from.z;
    const yzLength = Math.hypot(dy, dz);

    if (yzLength < Number.EPSILON) {
      const fallback = traineeIndex % 2 === 0 ? 1 : -1;
      return new THREE.Vector3(0, 0, fallback * magnitude);
    }

    const perpY = -dz / yzLength;
    const perpZ = dy / yzLength;

    return new THREE.Vector3(0, perpY * magnitude, perpZ * magnitude);
  }

  private hasSignificantMovement(nodePositions: Map<string, NodePosition>): boolean {
    if (this.previousNodePositions.size !== nodePositions.size) {
      return true;
    }

    for (const [nodeId, position] of nodePositions) {
      const previous = this.previousNodePositions.get(nodeId);
      if (!previous) {
        return true;
      }

      const dx = position.x - previous.x;
      const dy = position.y - previous.y;
      const dz = position.z - previous.z;

      if (Math.hypot(dx, dy, dz) > POSITION_CHANGE_THRESHOLD) {
        return true;
      }
    }

    return false;
  }

  private mapPositionsFromData(data: GraphData): Map<string, NodePosition> {
    const map = new Map<string, NodePosition>();

    for (const node of data.nodes) {
      map.set(node.id, {
        x: node.position.x,
        y: node.position.y,
        z: node.position.z,
      });
    }

    return map;
  }

  private cloneNodePositionMap(
    source: Map<string, NodePosition>,
  ): Map<string, THREE.Vector3> {
    const clone = new Map<string, THREE.Vector3>();

    for (const [nodeId, position] of source) {
      clone.set(nodeId, new THREE.Vector3(position.x, position.y, position.z));
    }

    return clone;
  }

  private makeEdgePairKey(source: string, target: string): string {
    return `${source}__${target}`;
  }
}