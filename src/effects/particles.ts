import * as THREE from 'three';

const PARTICLE_COUNT = 300;

const X_MIN = -40;
const X_MAX = 40;
const Y_MIN = -20;
const Y_MAX = 20;
const Z_MIN = -25;
const Z_MAX = 25;

function randomInRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

export function initParticles(scene: THREE.Scene): {
  update: (time: number) => void;
} {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const phases = new Float32Array(PARTICLE_COUNT);
  const amplitudes = new Float32Array(PARTICLE_COUNT);
  const speeds = new Float32Array(PARTICLE_COUNT);

  for (let i = 0; i < PARTICLE_COUNT; i += 1) {
    const index = i * 3;

    positions[index] = randomInRange(X_MIN, X_MAX);
    positions[index + 1] = randomInRange(Y_MIN, Y_MAX);
    positions[index + 2] = randomInRange(Z_MIN, Z_MAX);

    phases[i] = randomInRange(0, Math.PI * 2);
    amplitudes[i] = randomInRange(0.2, 1.2);
    speeds[i] = randomInRange(0.0003, 0.0012);
  }

  const geometry = new THREE.BufferGeometry();
  const positionAttribute = new THREE.BufferAttribute(positions, 3);
  positionAttribute.setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute('position', positionAttribute);

  const material = new THREE.PointsMaterial({
    color: 0x4488cc,
    size: 0.08,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  return {
    update: (time: number) => {
      for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        const index = i * 3;
        const phase = phases[i];
        const amplitude = amplitudes[i];
        const speed = speeds[i];

        positions[index + 1] += Math.sin(time * speed + phase) * amplitude * 0.001;
        positions[index] += Math.cos(time * speed * 0.7 + phase) * amplitude * 0.0005;
        positions[index + 2] +=
          Math.sin(time * speed * 0.5 + phase + 1.0) * amplitude * 0.0008;
      }

      geometry.attributes.position.needsUpdate = true;
    },
  };
}
