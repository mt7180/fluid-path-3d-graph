import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export class CameraController {
  private camera: THREE.PerspectiveCamera | null = null;

  private controls: OrbitControls | null = null;

  private readonly defaultPosition = new THREE.Vector3(0, 8, 170);

  private readonly defaultTarget = new THREE.Vector3(0, 0, 0);

  private readonly startTarget = new THREE.Vector3();

  private readonly endTarget = new THREE.Vector3();

  private readonly startPosition = new THREE.Vector3();

  private readonly endPosition = new THREE.Vector3();

  private transitionProgress = 0;

  private isTransitioning = false;

  private readonly onControlsStart = (): void => {
    if (this.isTransitioning) {
      this.cancelTransition();
    }
  };

  init(camera: THREE.PerspectiveCamera, domElement: HTMLElement): void {
    if (this.controls) {
      this.controls.removeEventListener('start', this.onControlsStart);
      this.controls.dispose();
    }

    this.camera = camera;
    this.controls = new OrbitControls(camera, domElement);

    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 10;
    this.controls.maxDistance = 350;
    this.controls.screenSpacePanning = true;
    this.controls.enablePan = true;
    this.controls.rotateSpeed = 0.5;
    this.controls.zoomSpeed = 0.8;

    this.camera.position.copy(this.defaultPosition);
    this.controls.target.copy(this.defaultTarget);
    this.controls.update();

    this.controls.addEventListener('start', this.onControlsStart);
    this.cancelTransition();
  }

  focusOn(position: THREE.Vector3, boundingSize: number): void {
    const camera = this.requireCamera();
    const controls = this.requireControls();

    this.startTarget.copy(controls.target);
    this.endTarget.copy(position);

    this.startPosition.copy(camera.position);

    const direction = new THREE.Vector3().subVectors(camera.position, controls.target);
    if (direction.lengthSq() < 1e-8) {
      direction.set(0, 0, 1);
    }

    direction.normalize();

    const comfortableDistance = Math.max(boundingSize * 2, 8);
    this.endPosition.copy(position).addScaledVector(direction, comfortableDistance);

    this.transitionProgress = 0;
    this.isTransitioning = true;
  }

  reset(): void {
    const camera = this.requireCamera();
    const controls = this.requireControls();

    this.startTarget.copy(controls.target);
    this.endTarget.copy(this.defaultTarget);

    this.startPosition.copy(camera.position);
    this.endPosition.copy(this.defaultPosition);

    this.transitionProgress = 0;
    this.isTransitioning = true;
  }

  update(deltaTime: number): void {
    const camera = this.requireCamera();
    const controls = this.requireControls();

    if (this.isTransitioning && Number.isFinite(deltaTime) && deltaTime > 0) {
      this.transitionProgress = Math.min(1, this.transitionProgress + deltaTime * 1.2);

      const easedProgress = easeOutCubic(this.transitionProgress);

      controls.target.lerpVectors(this.startTarget, this.endTarget, easedProgress);
      camera.position.lerpVectors(this.startPosition, this.endPosition, easedProgress);

      if (this.transitionProgress >= 1) {
        this.isTransitioning = false;
      }
    }

    controls.update();
  }

  getControls(): OrbitControls {
    return this.requireControls();
  }

  private cancelTransition(): void {
    this.isTransitioning = false;
    this.transitionProgress = 0;
  }

  private requireCamera(): THREE.PerspectiveCamera {
    if (!this.camera) {
      throw new Error('CameraController has not been initialized. Call init() first.');
    }

    return this.camera;
  }

  private requireControls(): OrbitControls {
    if (!this.controls) {
      throw new Error('CameraController has not been initialized. Call init() first.');
    }

    return this.controls;
  }
}
