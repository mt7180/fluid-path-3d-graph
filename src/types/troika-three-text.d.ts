declare module 'troika-three-text' {
  import * as THREE from 'three';

  export class Text extends THREE.Mesh {
    text: string;
    fontSize: number;
    color: THREE.ColorRepresentation;
    anchorX: 'left' | 'center' | 'right' | number | string;
    anchorY: 'top' | 'top-baseline' | 'middle' | 'bottom' | 'bottom-baseline' | number | string;
    outlineWidth: number | string;
    outlineColor: THREE.ColorRepresentation;
    outlineBlur: number;
    material: THREE.Material | THREE.Material[];
    renderOrder: number;

    sync(callback?: () => void): void;
    dispose(): void;
  }
}
