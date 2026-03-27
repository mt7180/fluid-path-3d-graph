import type { GraphData, GraphNode, NodeType } from '../types';

type SimulationConfig = {
  repulsionStrength: number;
  linkDistance: number;
  linkStrength: number;
  layerStrength: number;
  centerStrength: number;
  damping: number;
  maxVelocity: number;
  wobbleAmplitude: number;
  wobbleFrequency: number;
  stabilizationThreshold: number;
};

const DEFAULT_CONFIG: SimulationConfig = {
  repulsionStrength: 900,
  linkDistance: 32,
  linkStrength: 0.03,
  layerStrength: 0.1,
  centerStrength: 0.005,
  damping: 0.92,
  maxVelocity: 3.0,
  wobbleAmplitude: 0.015,
  wobbleFrequency: 0.5,
  stabilizationThreshold: 0.01,
};

const MIN_DISTANCE = 7.0;
const MIN_DISTANCE_SQUARED = 49.0;
const TWO_PI = Math.PI * 2;
const REFERENCE_FPS = 60;

type WobbleState = {
  phaseX: number;
  phaseY: number;
  phaseZ: number;
  frequencyHz: number;
};

export class ForceSimulation {
  private readonly data: GraphData;

  private readonly config: SimulationConfig;

  private readonly nodeIndexById: Map<string, number>;

  private readonly targetXByNodeIndex: number[];

  private readonly wobbleByNodeIndex: WobbleState[];

  private elapsedTime = 0;

  private hasStabilized = false;

  constructor(data: GraphData, config?: Partial<SimulationConfig>) {
    this.data = data;
    this.config = { ...DEFAULT_CONFIG, ...config };

    this.nodeIndexById = new Map<string, number>();
    this.data.nodes.forEach((node, index) => {
      this.nodeIndexById.set(node.id, index);
    });

    this.targetXByNodeIndex = this.buildLayerTargets(this.data.nodes);
    this.wobbleByNodeIndex = this.buildWobbleStates(this.data.nodes.length);
  }

  tick(deltaTime: number): void {
    if (!Number.isFinite(deltaTime) || deltaTime <= 0) {
      return;
    }

    const nodes = this.data.nodes;
    if (nodes.length === 0) {
      return;
    }

    const step = Math.max(0, deltaTime * REFERENCE_FPS);
    this.elapsedTime += deltaTime;

    const forceX = new Array<number>(nodes.length).fill(0);
    const forceY = new Array<number>(nodes.length).fill(0);
    const forceZ = new Array<number>(nodes.length).fill(0);

    this.applyRepulsion(nodes, forceX, forceY, forceZ);
    this.applyLinkAttraction(nodes, forceX, forceY, forceZ);
    this.applyLayerConstraint(nodes, forceX);
    this.applyCentering(nodes, forceX, forceY, forceZ);

    if (this.hasStabilized) {
      this.applyWobble(nodes, step);
    }

    const dampingFactor = Math.pow(this.config.damping, step);
    let totalVelocityEnergy = 0;

    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node.fixed) {
        node.velocity.x = 0;
        node.velocity.y = 0;
        node.velocity.z = 0;
        continue;
      }

      node.velocity.x += forceX[i] * step;
      node.velocity.y += forceY[i] * step;
      node.velocity.z += forceZ[i] * step;

      node.velocity.x *= dampingFactor;
      node.velocity.y *= dampingFactor;
      node.velocity.z *= dampingFactor;

      node.velocity.x = this.clampAxisVelocity(node.velocity.x);
      node.velocity.y = this.clampAxisVelocity(node.velocity.y);
      node.velocity.z = this.clampAxisVelocity(node.velocity.z);

      node.position.x += node.velocity.x * step;
      node.position.y += node.velocity.y * step;
      node.position.z += node.velocity.z * step;

      totalVelocityEnergy +=
        node.velocity.x * node.velocity.x +
        node.velocity.y * node.velocity.y +
        node.velocity.z * node.velocity.z;
    }

    const averageVelocityEnergy = totalVelocityEnergy / nodes.length;
    if (averageVelocityEnergy < this.config.stabilizationThreshold) {
      this.hasStabilized = true;
    }
  }

  isStabilized(): boolean {
    return this.hasStabilized;
  }

  getNodes(): GraphNode[] {
    return this.data.nodes;
  }

  private applyRepulsion(
    nodes: GraphNode[],
    forceX: number[],
    forceY: number[],
    forceZ: number[],
  ): void {
    for (let i = 0; i < nodes.length; i += 1) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j += 1) {
        const b = nodes[j];

        const dx = b.position.x - a.position.x;
        const dy = b.position.y - a.position.y;
        const dz = b.position.z - a.position.z;

        const distanceSquared = Math.max(
          dx * dx + dy * dy + dz * dz,
          MIN_DISTANCE_SQUARED,
        );
        const distance = Math.sqrt(distanceSquared);
        const force = this.config.repulsionStrength / distanceSquared;

        const nx = dx / distance;
        const ny = dy / distance;
        const nz = dz / distance;

        const fx = nx * force;
        const fy = ny * force;
        const fz = nz * force;

        forceX[i] -= fx;
        forceY[i] -= fy;
        forceZ[i] -= fz;

        forceX[j] += fx;
        forceY[j] += fy;
        forceZ[j] += fz;
      }
    }
  }

  private applyLinkAttraction(
    nodes: GraphNode[],
    forceX: number[],
    forceY: number[],
    forceZ: number[],
  ): void {
    for (const edge of this.data.edges) {
      const sourceIndex = this.nodeIndexById.get(edge.source);
      const targetIndex = this.nodeIndexById.get(edge.target);

      if (sourceIndex === undefined || targetIndex === undefined) {
        continue;
      }

      const source = nodes[sourceIndex];
      const target = nodes[targetIndex];

      const dx = target.position.x - source.position.x;
      const dy = target.position.y - source.position.y;
      const dz = target.position.z - source.position.z;

      const distanceSquared = Math.max(
        dx * dx + dy * dy + dz * dz,
        MIN_DISTANCE_SQUARED,
      );
      const distance = Math.sqrt(distanceSquared);
      const extension = distance - this.config.linkDistance;
      const force = this.config.linkStrength * extension;

      const nx = dx / distance;
      const ny = dy / distance;
      const nz = dz / distance;

      const fx = nx * force;
      const fy = ny * force;
      const fz = nz * force;

      forceX[sourceIndex] += fx;
      forceY[sourceIndex] += fy;
      forceZ[sourceIndex] += fz;

      forceX[targetIndex] -= fx;
      forceY[targetIndex] -= fy;
      forceZ[targetIndex] -= fz;
    }
  }

  private applyLayerConstraint(nodes: GraphNode[], forceX: number[]): void {
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      const targetX = this.targetXByNodeIndex[i];
      forceX[i] += (targetX - node.position.x) * this.config.layerStrength;
    }
  }

  private applyCentering(
    nodes: GraphNode[],
    forceX: number[],
    forceY: number[],
    forceZ: number[],
  ): void {
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      forceX[i] += -node.position.x * this.config.centerStrength;
      forceY[i] += -node.position.y * this.config.centerStrength;
      forceZ[i] += -node.position.z * this.config.centerStrength;
    }
  }

  private applyWobble(nodes: GraphNode[], step: number): void {
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node.fixed) {
        continue;
      }

      const wobble = this.wobbleByNodeIndex[i];
      const angular = TWO_PI * wobble.frequencyHz * this.elapsedTime;

      const xWave = Math.sin(angular + wobble.phaseX);
      const yWave = Math.sin(angular + wobble.phaseY);
      const zWave = Math.sin(angular + wobble.phaseZ);

      node.velocity.x += this.config.wobbleAmplitude * 0.7 * xWave * step;
      node.velocity.y += this.config.wobbleAmplitude * 1.0 * yWave * step;
      node.velocity.z += this.config.wobbleAmplitude * 1.1 * zWave * step;
    }
  }

  private buildLayerTargets(nodes: GraphNode[]): number[] {
    const byType = new Map<NodeType, { sum: number; count: number }>();

    for (const node of nodes) {
      const current = byType.get(node.type);
      if (!current) {
        byType.set(node.type, { sum: node.position.x, count: 1 });
        continue;
      }

      current.sum += node.position.x;
      current.count += 1;
    }

    const averages = new Map<NodeType, number>();
    byType.forEach((value, type) => {
      averages.set(type, value.sum / value.count);
    });

    return nodes.map((node) => averages.get(node.type) ?? node.position.x);
  }

  private buildWobbleStates(nodeCount: number): WobbleState[] {
    const minFrequency = 0.3;
    const maxFrequency = 0.8;

    const states: WobbleState[] = [];
    for (let i = 0; i < nodeCount; i += 1) {
      states.push({
        phaseX: Math.random() * TWO_PI,
        phaseY: Math.random() * TWO_PI,
        phaseZ: Math.random() * TWO_PI,
        frequencyHz:
          minFrequency + Math.random() * (maxFrequency - minFrequency),
      });
    }
    return states;
  }

  private clampAxisVelocity(value: number): number {
    const max = this.config.maxVelocity;
    if (value > max) {
      return max;
    }
    if (value < -max) {
      return -max;
    }
    return value;
  }
}
