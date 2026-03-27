import * as THREE from 'three';

type DotMesh = THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;

type TraineeFlow = {
  dots: DotMesh[];
  curve: THREE.CatmullRomCurve3;
  offsets: number[];
  speed: number;
};

const FLOW_COLOR = '#88ccff';
const DOT_COUNT = 6;
const BASE_DOT_RADIUS = 0.04;
const DOT_SEGMENTS = 8;
const BASE_OPACITY = 0.9;
const HIGHLIGHT_OPACITY = 1.0;
const HIDDEN_OPACITY = 0.0;
const BASE_SCALE = 1.0;
const HIGHLIGHT_SCALE = 1.2;
const PULSE_AMPLITUDE = 0.3;
const PULSE_FREQUENCY = 5.0;
const FLOW_SPEED = 0.06;

export class EnergyFlow {
  private readonly flowByTraineeId = new Map<string, TraineeFlow>();

  private scene: THREE.Scene | null = null;

  private highlightedTraineeId: string | null = null;

  init(
    curves: Map<string, THREE.CatmullRomCurve3>,
    traineeColors: Map<string, string>,
    scene: THREE.Scene,
  ): void {
    void traineeColors;
    this.dispose();

    this.scene = scene;
    this.highlightedTraineeId = null;

    for (const [traineeId, curve] of curves) {
      const dots: DotMesh[] = [];
      const offsets: number[] = [];

      for (let i = 0; i < DOT_COUNT; i += 1) {
        const geometry = new THREE.SphereGeometry(BASE_DOT_RADIUS, DOT_SEGMENTS, DOT_SEGMENTS);
        const material = new THREE.MeshBasicMaterial({
          color: FLOW_COLOR,
          transparent: true,
          opacity: BASE_OPACITY,
          blending: THREE.AdditiveBlending,
        });

        const dot = new THREE.Mesh(geometry, material);
        const t = i / DOT_COUNT;
        dot.position.copy(curve.getPointAt(t));

        dots.push(dot);
        offsets.push(t);
        scene.add(dot);
      }

      this.flowByTraineeId.set(traineeId, {
        dots,
        curve,
        offsets,
        speed: FLOW_SPEED,
      });
    }
  }

  update(time: number, deltaTime: number): void {
    for (const [traineeId, flow] of this.flowByTraineeId) {
      const sizeMultiplier =
        this.highlightedTraineeId !== null && this.highlightedTraineeId === traineeId
          ? HIGHLIGHT_SCALE
          : BASE_SCALE;

      for (let i = 0; i < flow.dots.length; i += 1) {
        const nextT = (flow.offsets[i] + flow.speed * deltaTime) % 1.0;
        flow.offsets[i] = nextT;

        const dot = flow.dots[i];
        dot.position.copy(flow.curve.getPointAt(nextT));

        const pulse = 1 + Math.sin(time * PULSE_FREQUENCY + i) * PULSE_AMPLITUDE;
        dot.scale.setScalar(sizeMultiplier * pulse);
      }
    }
  }

  setHighlight(traineeId: string | null): void {
    this.highlightedTraineeId = traineeId;

    for (const [id, flow] of this.flowByTraineeId) {
      const isVisible = traineeId === null || id === traineeId;
      const opacity = traineeId === null ? BASE_OPACITY : id === traineeId ? HIGHLIGHT_OPACITY : HIDDEN_OPACITY;
      const scale = traineeId !== null && id === traineeId ? HIGHLIGHT_SCALE : BASE_SCALE;

      for (const dot of flow.dots) {
        dot.material.opacity = opacity;
        dot.visible = isVisible;
        dot.scale.setScalar(scale);
      }
    }
  }

  dispose(): void {
    for (const flow of this.flowByTraineeId.values()) {
      for (const dot of flow.dots) {
        this.scene?.remove(dot);
        dot.geometry.dispose();
        dot.material.dispose();
      }
    }

    this.flowByTraineeId.clear();
    this.highlightedTraineeId = null;
    this.scene = null;
  }
}