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
  const composer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.2,
    0.6,
    0.15
  );
  bloomPass.strength = 1.2;
  bloomPass.radius = 0.6;
  bloomPass.threshold = 0.15;
  composer.addPass(bloomPass);

  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  return { composer, bloomPass };
}

export function resizePostprocessing(
  composer: EffectComposer,
  width: number,
  height: number
): void {
  composer.setSize(width, height);

  for (const pass of composer.passes) {
    if (pass instanceof UnrealBloomPass) {
      pass.setSize(width, height);
    }
  }
}
