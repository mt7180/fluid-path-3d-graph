import type { GraphData, Trainee } from '../types';
import type { EnergyFlow } from '../effects/energyFlow';
import type { NodeRenderer } from '../scene/nodeRenderer';
import type { PathRenderer } from '../scene/pathRenderer';
import type { InfoPanel } from '../ui/infoPanel';
import type { LabelRenderer } from '../ui/labels';

type SelectionManagerDeps = {
  nodeRenderer: NodeRenderer;
  pathRenderer: PathRenderer;
  energyFlow: EnergyFlow;
  infoPanel: InfoPanel;
  labelRenderer: LabelRenderer;
  graphData: GraphData;
};

export class SelectionManager {
  private readonly nodeRenderer: NodeRenderer;

  private readonly pathRenderer: PathRenderer;

  private readonly energyFlow: EnergyFlow;

  private readonly infoPanel: InfoPanel;

  private readonly labelRenderer: LabelRenderer;

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
  }

  update(_deltaTime: number): void {
    // Reserved for future smooth transition logic.
  }

  private clearSelection(): void {
    this.selectedTraineeId = null;
    this.isLocked = false;

    this.resetAll();
    (this.infoPanel as unknown as { hide(): void }).hide();
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

}
