import * as THREE from 'three';

const CLICK_MOVE_THRESHOLD_PX = 5;

export class RaycastInteraction {
  onHover: ((nodeId: string | null) => void) | null = null;

  onClick: ((nodeId: string | null) => void) | null = null;

  private raycaster: THREE.Raycaster | null = null;

  private mouse: THREE.Vector2 | null = null;

  private camera: THREE.PerspectiveCamera | null = null;

  private domElement: HTMLElement | null = null;

  private nodeMeshes: Map<string, THREE.Object3D> | null = null;

  private hoveredNodeId: string | null = null;

  private clickPending = false;

  private pointerDownX = 0;

  private pointerDownY = 0;

  private readonly handlePointerMove = (event: PointerEvent): void => {
    if (!this.domElement || !this.mouse) {
      return;
    }

    this.mouse.x = (event.clientX / this.domElement.clientWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / this.domElement.clientHeight) * 2 + 1;
  };

  private readonly handlePointerDown = (event: PointerEvent): void => {
    this.handlePointerMove(event);

    this.clickPending = true;
    this.pointerDownX = event.clientX;
    this.pointerDownY = event.clientY;
  };

  private readonly handlePointerUp = (event: PointerEvent): void => {
    this.handlePointerMove(event);

    if (!this.clickPending) {
      return;
    }

    this.clickPending = false;

    const deltaX = event.clientX - this.pointerDownX;
    const deltaY = event.clientY - this.pointerDownY;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance >= CLICK_MOVE_THRESHOLD_PX) {
      return;
    }

    const nodeId = this.raycastNodeId();
    this.onClick?.(nodeId);
  };

  init(
    camera: THREE.PerspectiveCamera,
    domElement: HTMLElement,
    nodeMeshes: Map<string, THREE.Object3D>,
  ): void {
    this.dispose();

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.camera = camera;
    this.domElement = domElement;
    this.nodeMeshes = nodeMeshes;
    this.hoveredNodeId = null;
    this.clickPending = false;

    this.domElement.addEventListener('pointermove', this.handlePointerMove);
    this.domElement.addEventListener('pointerdown', this.handlePointerDown);
    this.domElement.addEventListener('pointerup', this.handlePointerUp);
  }

  update(): void {
    if (!this.domElement) {
      return;
    }

    const nodeId = this.raycastNodeId();

    if (nodeId !== null) {
      this.domElement.style.cursor = 'pointer';

      if (nodeId !== this.hoveredNodeId) {
        this.hoveredNodeId = nodeId;
        this.onHover?.(nodeId);
      }

      return;
    }

    this.domElement.style.cursor = '';

    if (this.hoveredNodeId !== null) {
      this.hoveredNodeId = null;
      this.onHover?.(null);
    }
  }

  dispose(): void {
    if (this.domElement) {
      this.domElement.removeEventListener('pointermove', this.handlePointerMove);
      this.domElement.removeEventListener('pointerdown', this.handlePointerDown);
      this.domElement.removeEventListener('pointerup', this.handlePointerUp);
      this.domElement.style.cursor = '';
    }

    this.clickPending = false;
    this.hoveredNodeId = null;
    this.raycaster = null;
    this.mouse = null;
    this.camera = null;
    this.domElement = null;
    this.nodeMeshes = null;
  }

  private raycastNodeId(): string | null {
    if (!this.raycaster || !this.mouse || !this.camera || !this.nodeMeshes) {
      return null;
    }

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const meshes: THREE.Object3D[] = [];
    for (const root of this.nodeMeshes.values()) {
      root.traverse((child) => {
        if (child instanceof THREE.Mesh && this.resolveNodeId(child) !== null) {
          meshes.push(child);
        }
      });
    }

    if (meshes.length === 0) {
      return null;
    }

    const intersections = this.raycaster.intersectObjects(meshes, false);
    if (intersections.length === 0) {
      return null;
    }

    return this.resolveNodeId(intersections[0].object);
  }

  private resolveNodeId(object: THREE.Object3D): string | null {
    let current: THREE.Object3D | null = object;

    while (current) {
      const nodeId = current.userData?.nodeId;
      if (typeof nodeId === 'string') {
        return nodeId;
      }

      current = current.parent;
    }

    return null;
  }
}