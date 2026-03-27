import * as THREE from 'three';

import type { GraphData, GraphNode, Trainee } from '../types';
import type { EnergyFlow } from '../effects/energyFlow';
import type { NodeRenderer } from '../scene/nodeRenderer';
import type { PathRenderer } from '../scene/pathRenderer';
import type { InfoPanel } from '../ui/infoPanel';
import type { LabelRenderer } from '../ui/labels';
import type { CameraController } from './cameraController';

type SelectionManagerDeps = {
  nodeRenderer: NodeRenderer;
  pathRenderer: PathRenderer;
  energyFlow: EnergyFlow;
  infoPanel: InfoPanel;
  labelRenderer: LabelRenderer;
  cameraController: CameraController;
  graphData: GraphData;
};

export class SelectionManager {
  private readonly nodeRenderer: NodeRenderer;

  private readonly pathRenderer: PathRenderer;

  private readonly energyFlow: EnergyFlow;

  private readonly infoPanel: InfoPanel;

  private readonly labelRenderer: LabelRenderer;

  private readonly cameraController: CameraController;

  private readonly graphData: GraphData;

  private hoveredNodeId: string | null = null;

  private selectedTraineeId: string | null = null;

  private isLocked = false;

  constructor(deps: SelectionManagerDeps) {
    this.nodeRenderer = deps.nodeRenderer;
    this.pathRenderer = deps.pathRenderer;
    this.energyFlow = deps.energyFlow;
    this.infoPanel = deps.infoPanel;
    this.labelRenderer = deps.labelRenderer;
    this.cameraController = deps.cameraController;
    this.graphData = deps.graphData;
  }

  handleHover(nodeId: string | null): void {
    if (this.isLocked) {
      return;
    }

    if (this.hoveredNodeId === nodeId) {
      return;
    }

    if (nodeId === null) {
      this.resetAll();
      return;
    }

    const trainee = this.findFirstTraineeByNodeId(nodeId);
    if (!trainee) {
      this.resetAll();
      return;
    }

    this.hoveredNodeId = nodeId;
    this.applyTraineeVisuals(trainee);
  }

  handleClick(nodeId: string | null): void {
    if (nodeId === null) {
      if (this.isLocked) {
        this.clearSelection();
      }

      return;
    }

    const trainee = this.findFirstTraineeByNodeId(nodeId);
    if (!trainee) {
      return;
    }

    if (this.isLocked && this.selectedTraineeId === trainee.id) {
      this.clearSelection();
      return;
    }

    this.selectedTraineeId = trainee.id;
    this.isLocked = true;

    this.applyTraineeVisuals(trainee);
    this.infoPanel.show(trainee, this.graphData.nodes);
    this.focusCameraOnTraineePath(trainee);
  }

  update(_deltaTime: number): void {
    // Reserved for future smooth transition logic.
  }

  private clearSelection(): void {
    this.selectedTraineeId = null;
    this.isLocked = false;

    this.resetAll();
    (this.infoPanel as unknown as { hide(): void }).hide();
    this.cameraController.reset();
  }

  private resetAll(): void {
    this.nodeRenderer.resetHighlights();
    this.pathRenderer.resetHighlights();
    this.energyFlow.setHighlight(null);
    this.labelRenderer.resetLabels();
    this.hoveredNodeId = null;
  }

  private applyTraineeVisuals(trainee: Trainee): void {
    this.nodeRenderer.setTraineeHighlight(trainee.nodeSequence);
    this.pathRenderer.highlightTrainee(trainee.id);
    this.energyFlow.setHighlight(trainee.id);
    this.labelRenderer.highlightLabels(trainee.nodeSequence);
  }

  private findFirstTraineeByNodeId(nodeId: string): Trainee | null {
    for (const trainee of this.graphData.trainees) {
      if (trainee.nodeSequence.includes(nodeId)) {
        return trainee;
      }
    }

    return null;
  }

  private focusCameraOnTraineePath(trainee: Trainee): void {
    const traineeNodes = this.getTraineeNodes(trainee);
    if (traineeNodes.length === 0) {
      return;
    }

    const center = new THREE.Vector3();

    for (const node of traineeNodes) {
      center.add(new THREE.Vector3(node.position.x, node.position.y, node.position.z));
    }

    center.divideScalar(traineeNodes.length);

    let boundingSize = 0;
    for (const node of traineeNodes) {
      const nodePosition = new THREE.Vector3(node.position.x, node.position.y, node.position.z);
      boundingSize = Math.max(boundingSize, center.distanceTo(nodePosition));
    }

    this.cameraController.focusOn(center, boundingSize);
  }

  private getTraineeNodes(trainee: Trainee): GraphNode[] {
    const nodeById = new Map(this.graphData.nodes.map((node) => [node.id, node] as const));
    const nodes: GraphNode[] = [];

    for (const nodeId of trainee.nodeSequence) {
      const node = nodeById.get(nodeId);
      if (node) {
        nodes.push(node);
      }
    }

    return nodes;
  }
}
