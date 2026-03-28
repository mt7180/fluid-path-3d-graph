import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export function initPostprocessing(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
): {
  composer: EffectComposer;
  bloomPass: UnrealBloomPass;
} {
  const drawingBufferSize = renderer.getDrawingBufferSize(new THREE.Vector2());
  const renderTarget = new THREE.WebGLRenderTarget(
    drawingBufferSize.x,
    drawingBufferSize.y,
    {
      samples: 4,
      type: THREE.HalfFloatType,
    }
  );

  const composer = new EffectComposer(renderer, renderTarget);
  composer.setPixelRatio(renderer.getPixelRatio());

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.8,
    0.3,
    0.2
  );
  bloomPass.strength = 0.8;
  bloomPass.radius = 0.3;
  bloomPass.threshold = 0.2;
  composer.addPass(bloomPass);

  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  return { composer, bloomPass };
}

export function resizePostprocessing(
  composer: EffectComposer,
  width: number,
  height: number,
  pixelRatio: number
): void {
  composer.setPixelRatio(pixelRatio);
  composer.setSize(width, height);

  for (const pass of composer.passes) {
    if (pass instanceof UnrealBloomPass) {
      pass.setSize(width, height);
    }
  }
}
