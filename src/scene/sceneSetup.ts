import * as THREE from 'three';

export function initScene(canvas: HTMLCanvasElement): {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
} {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#050508');
  scene.fog = new THREE.FogExp2('#080812', 0.003);

  const parent = canvas.parentElement;
  const width = parent?.clientWidth ?? canvas.clientWidth ?? window.innerWidth;
  const height = parent?.clientHeight ?? canvas.clientHeight ?? window.innerHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 500);
  camera.position.set(0, 15, 130);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setPixelRatio(Math.min(Math.max(window.devicePixelRatio, 2), 4));
  renderer.setSize(width, height, false);

  const ambientLight = new THREE.AmbientLight('#2a3754', 0.25);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight('#e0f0ff', 0.4);
  directionalLight.position.set(-15, 20, 15);
  scene.add(directionalLight);

  const pointLight1 = new THREE.PointLight('#0066ff', 0.3, 100);
  pointLight1.position.set(20, 10, -10);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight('#6600ff', 0.25, 100);
  pointLight2.position.set(-20, -10, 20);
  scene.add(pointLight2);

  window.addEventListener('resize', () => {
    const nextWidth = parent?.clientWidth ?? canvas.clientWidth ?? window.innerWidth;
    const nextHeight = parent?.clientHeight ?? canvas.clientHeight ?? window.innerHeight;

    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(nextWidth, nextHeight, false);
    renderer.setPixelRatio(Math.min(Math.max(window.devicePixelRatio, 2), 4));
  });

  return { scene, camera, renderer };
}
