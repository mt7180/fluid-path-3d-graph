import * as THREE from 'three';
import type { GraphData, GraphNode } from '../types';

type NodeVisual = {
  group: THREE.Object3D;
  outerMesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhysicalMaterial>;
  innerMesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
  baseRadius: number;
  phase: number;
  pulseSpeed: number;
  targetScaleMultiplier: number;
  targetOuterOpacity: number;
  targetEmissiveIntensity: number;
  targetInnerBaseOpacity: number;
};

const BASE_RADIUS = 3.5;
const RADIUS_STEP = 0.5;
const MAX_RADIUS = 7.0;

const DEFAULT_OUTER_OPACITY = 0.4;
const DEFAULT_EMISSIVE_INTENSITY = 0.35;
const DEFAULT_INNER_BASE_OPACITY = 0.25;

const HIGHLIGHT_EMISSIVE_INTENSITY = 0.7;
const HIGHLIGHT_SCALE_MULTIPLIER = 1.15;
const HIGHLIGHT_INNER_BASE_OPACITY = 0.2;

const TRAINEE_EMISSIVE_INTENSITY = 0.55;
const TRAINEE_DIM_EMISSIVE_INTENSITY = 0.03;
const TRAINEE_DIM_OUTER_OPACITY = 0.05;
const TRAINEE_ACTIVE_INNER_BASE_OPACITY = 0.2;
const TRAINEE_DIM_INNER_BASE_OPACITY = 0.05;

export class NodeRenderer {
  private readonly visualsById = new Map<string, NodeVisual>();

  private readonly nodeMeshes = new Map<string, THREE.Object3D>();

  private highlightedNodeId: string | null = null;

  private traineeHighlightNodeIds = new Set<string>();

  createNodes(data: GraphData, scene: THREE.Scene): Map<string, THREE.Object3D> {
    this.disposeAllVisuals();

    const importanceByNodeId = this.buildImportanceMap(data);

    for (const node of data.nodes) {
      const importanceCount = importanceByNodeId.get(node.id) ?? 0;
      const radius = Math.min(MAX_RADIUS, BASE_RADIUS + importanceCount * RADIUS_STEP);

      const group = new THREE.Object3D();
      group.position.set(node.position.x, node.position.y, node.position.z);

      const outerGeometry = new THREE.SphereGeometry(radius, 128, 128);
      const outerMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x6ab8f7,
        transparent: true,
        opacity: DEFAULT_OUTER_OPACITY,
        roughness: 0.05,
        metalness: 0.0,
        transmission: 0.98,
        ior: 1.5,
        thickness: 5.0,
        emissive: 0x2266cc,
        emissiveIntensity: DEFAULT_EMISSIVE_INTENSITY,
        clearcoat: 1.0,
        clearcoatRoughness: 0.01,
        specularIntensity: 1.0,
        specularColor: new THREE.Color(0xffffff),
        side: THREE.FrontSide,
      });
      const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial);
      outerMesh.userData.nodeId = node.id;

      const innerGeometry = new THREE.SphereGeometry(radius * 0.4, 16, 16);
      const innerMaterial = new THREE.MeshBasicMaterial({
        color: 0x5599ee,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
      });
      const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);

      group.add(outerMesh);
      group.add(innerMesh);
      scene.add(group);

      const visual: NodeVisual = {
        group,
        outerMesh,
        innerMesh,
        baseRadius: radius,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.5 + Math.random() * 0.5,
        targetScaleMultiplier: 1.0,
        targetOuterOpacity: DEFAULT_OUTER_OPACITY,
        targetEmissiveIntensity: DEFAULT_EMISSIVE_INTENSITY,
        targetInnerBaseOpacity: DEFAULT_INNER_BASE_OPACITY,
      };

      this.visualsById.set(node.id, visual);
      this.nodeMeshes.set(node.id, group);
    }

    this.applyVisualTargets();

    return this.nodeMeshes;
  }

  updatePositions(nodes: GraphNode[]): void {
    for (const node of nodes) {
      const visual = this.visualsById.get(node.id);
      if (!visual) {
        continue;
      }

      visual.group.position.set(node.position.x, node.position.y, node.position.z);
    }
  }

  updateAnimations(time: number): void {
    for (const visual of this.visualsById.values()) {
      const phaseValue = Math.sin(time * visual.pulseSpeed + visual.phase);
      const animatedScale = 1.0 + phaseValue * 0.04;
      visual.group.scale.setScalar(animatedScale * visual.targetScaleMultiplier);

      const glowPulse = Math.sin(time * 0.8 + visual.phase) * 0.05;
      const opacity = THREE.MathUtils.clamp(
        visual.targetInnerBaseOpacity + glowPulse,
        0,
        1,
      );
      visual.innerMesh.material.opacity = opacity;
    }
  }

  highlightNode(nodeId: string): void {
    if (!this.visualsById.has(nodeId)) {
      return;
    }

    this.highlightedNodeId = nodeId;
    this.applyVisualTargets();
  }

  resetHighlights(): void {
    this.highlightedNodeId = null;
    this.traineeHighlightNodeIds = new Set<string>();
    this.applyVisualTargets();
  }

  setTraineeHighlight(traineeNodeIds: string[]): void {
    this.traineeHighlightNodeIds = new Set<string>(traineeNodeIds);
    this.applyVisualTargets();
  }

  getNodeMeshes(): Map<string, THREE.Object3D> {
    return this.nodeMeshes;
  }

  getNodeRadii(): Map<string, number> {
    const radii = new Map<string, number>();
    for (const [nodeId, visual] of this.visualsById) {
      radii.set(nodeId, visual.baseRadius);
    }
    return radii;
  }

  private applyVisualTargets(): void {
    const hasTraineeFilter = this.traineeHighlightNodeIds.size > 0;

    for (const [nodeId, visual] of this.visualsById) {
      if (!hasTraineeFilter) {
        visual.targetOuterOpacity = DEFAULT_OUTER_OPACITY;
        visual.targetEmissiveIntensity = DEFAULT_EMISSIVE_INTENSITY;
        visual.targetInnerBaseOpacity = DEFAULT_INNER_BASE_OPACITY;
      } else if (this.traineeHighlightNodeIds.has(nodeId)) {
        visual.targetOuterOpacity = DEFAULT_OUTER_OPACITY;
        visual.targetEmissiveIntensity = TRAINEE_EMISSIVE_INTENSITY;
        visual.targetInnerBaseOpacity = TRAINEE_ACTIVE_INNER_BASE_OPACITY;
      } else {
        visual.targetOuterOpacity = TRAINEE_DIM_OUTER_OPACITY;
        visual.targetEmissiveIntensity = TRAINEE_DIM_EMISSIVE_INTENSITY;
        visual.targetInnerBaseOpacity = TRAINEE_DIM_INNER_BASE_OPACITY;
      }

      if (nodeId === this.highlightedNodeId) {
        visual.targetScaleMultiplier = HIGHLIGHT_SCALE_MULTIPLIER;
        visual.targetEmissiveIntensity = HIGHLIGHT_EMISSIVE_INTENSITY;
        visual.targetInnerBaseOpacity = Math.max(
          visual.targetInnerBaseOpacity,
          HIGHLIGHT_INNER_BASE_OPACITY,
        );
      } else {
        visual.targetScaleMultiplier = 1.0;
      }

      visual.outerMesh.material.opacity = visual.targetOuterOpacity;
      visual.outerMesh.material.emissiveIntensity = visual.targetEmissiveIntensity;
    }
  }

  private buildImportanceMap(data: GraphData): Map<string, number> {
    const importanceByNodeId = new Map<string, number>();

    for (const trainee of data.trainees) {
      const uniqueNodeIds = new Set<string>(trainee.nodeSequence);
      for (const nodeId of uniqueNodeIds) {
        importanceByNodeId.set(nodeId, (importanceByNodeId.get(nodeId) ?? 0) + 1);
      }
    }

    return importanceByNodeId;
  }

  private disposeAllVisuals(): void {
    for (const visual of this.visualsById.values()) {
      visual.group.removeFromParent();

      visual.outerMesh.geometry.dispose();
      visual.outerMesh.material.dispose();

      visual.innerMesh.geometry.dispose();
      visual.innerMesh.material.dispose();
    }

    this.visualsById.clear();
    this.nodeMeshes.clear();
    this.highlightedNodeId = null;
    this.traineeHighlightNodeIds.clear();
  }
}
