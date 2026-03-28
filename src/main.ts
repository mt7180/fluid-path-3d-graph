import './styles/main.css';
import * as THREE from 'three';
import type { CatmullRomCurve3 } from 'three';
import { buildGraphData } from './data/trainees';
import { initScene } from './scene/sceneSetup';
import { initPostprocessing, resizePostprocessing } from './scene/postprocessing';
import { ForceSimulation } from './simulation/forceSimulation';
import { NodeRenderer } from './scene/nodeRenderer';
import { PathRenderer } from './scene/pathRenderer';
import { EnergyFlow } from './effects/energyFlow';
import { initParticles } from './effects/particles';
import { RaycastInteraction } from './interaction/raycaster';
import { CameraController } from './interaction/cameraController';
import { SelectionManager } from './interaction/selectionManager';
import { LabelRenderer } from './ui/labels';
import { InfoPanel } from './ui/infoPanel';

function init() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
  const uiOverlay = document.getElementById('ui-overlay');

  if (!canvas) {
    console.error('Initialization failed: #canvas element is missing.');
    return;
  }

  if (!uiOverlay) {
    console.error('Initialization failed: #ui-overlay element is missing.');
    return;
  }

  const graphData = buildGraphData();

  const { scene, camera, renderer } = initScene(canvas);
  const { composer } = initPostprocessing(renderer, scene, camera);

  const simulation = new ForceSimulation(graphData);

  const nodeRenderer = new NodeRenderer();
  const nodeMeshes = nodeRenderer.createNodes(graphData, scene);
  const nodeRadii = nodeRenderer.getNodeRadii();

  for (let i = 0; i < 100; i += 1) {
    simulation.tick(0.016);
  }
  nodeRenderer.updatePositions(simulation.getNodes());

  // Compute graph centroid after simulation pre-warm
  const preWarmedNodes = simulation.getNodes();
  const centroid = { x: 0, y: 0, z: 0 };
  for (const node of preWarmedNodes) {
    centroid.x += node.position.x;
    centroid.y += node.position.y;
    centroid.z += node.position.z;
  }
  centroid.x /= preWarmedNodes.length;
  centroid.y /= preWarmedNodes.length;
  centroid.z /= preWarmedNodes.length;

  const pathRenderer = new PathRenderer();
  pathRenderer.createPaths(graphData, scene);

  const initialNodePositions = buildNodePositionMap(simulation.getNodes());
  pathRenderer.updatePaths(initialNodePositions);

  const traineeColors = new Map(graphData.trainees.map((trainee) => [trainee.id, trainee.color]));
  let currentCurves = pathRenderer.getCurves();

  const energyFlow = new EnergyFlow();
  energyFlow.init(currentCurves, traineeColors, scene);

  const particles = initParticles(scene);

  const cameraController = new CameraController();
  cameraController.init(camera, renderer.domElement);

  // Center camera on the actual graph centroid
  const centroidVec = new THREE.Vector3(centroid.x, centroid.y, centroid.z);
  cameraController.setInitialTarget(centroidVec);

  const raycaster = new RaycastInteraction();
  raycaster.init(camera, renderer.domElement, nodeMeshes);

  const labelRenderer = new LabelRenderer();
  const css2dRenderer = labelRenderer.init(uiOverlay);
  labelRenderer.createLabels(graphData.nodes, scene, nodeRadii);

  const infoPanel = new InfoPanel();
  infoPanel.init(uiOverlay);

  const selectionManager = new SelectionManager({
    nodeRenderer,
    pathRenderer,
    energyFlow,
    infoPanel,
    labelRenderer,
    graphData,
  });

  raycaster.onHover = (nodeId) => selectionManager.handleHover(nodeId);
  raycaster.onClick = (nodeId) => selectionManager.handleClick(nodeId);

  let previousTime = 0;

  function animate(timeMs: number): void {
    const time = timeMs / 1000;
    const deltaTime = Math.min(time - previousTime, 0.05);
    previousTime = time;

    simulation.tick(deltaTime);

    const nodes = simulation.getNodes();
    nodeRenderer.updatePositions(nodes);
    labelRenderer.updatePositions(nodes, nodeRadii);
    nodeRenderer.updateAnimations(time);

    const nodePositions = buildNodePositionMap(nodes);
    pathRenderer.updatePaths(nodePositions);

    const latestCurves = pathRenderer.getCurves();
    if (haveCurvesChanged(currentCurves, latestCurves)) {
      energyFlow.init(latestCurves, traineeColors, scene);
      currentCurves = latestCurves;
    }
    energyFlow.update(time, deltaTime);

    particles.update(time);

    raycaster.update();
    selectionManager.update(deltaTime);
    cameraController.update(deltaTime);

    labelRenderer.update(camera);

    composer.render();
    css2dRenderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);

  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    resizePostprocessing(composer, width, height, renderer.getPixelRatio());
    css2dRenderer.setSize(width, height);
  });
}

function buildNodePositionMap(
  nodes: Array<{ id: string; position: { x: number; y: number; z: number } }>,
): Map<string, { x: number; y: number; z: number }> {
  const map = new Map<string, { x: number; y: number; z: number }>();
  for (const node of nodes) {
    map.set(node.id, node.position);
  }
  return map;
}

function haveCurvesChanged(
  previous: Map<string, CatmullRomCurve3>,
  next: Map<string, CatmullRomCurve3>,
): boolean {
  if (previous.size !== next.size) {
    return true;
  }

  for (const [traineeId, curve] of next) {
    if (previous.get(traineeId) !== curve) {
      return true;
    }
  }

  return false;
}

init();
