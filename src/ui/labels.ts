import * as THREE from 'three';
import { Text } from 'troika-three-text';
import type { GraphNode } from '../types';

type LabelData = {
    text: Text;
    baseMaterial: THREE.MeshBasicMaterial;
    dimmed: boolean;
    highlighted: boolean;
};

const BASE_COLOR = 0xffffff;
const BASE_OUTLINE_COLOR = 0x0088ff;
const BASE_OUTLINE_WIDTH = 0.08;
const BASE_OUTLINE_BLUR = 0.24;
const HIGHLIGHT_OUTLINE_WIDTH = 0.14;
const HIGHLIGHT_OUTLINE_BLUR = 0.38;
const DIMMED_OPACITY = 0.15;
const LABEL_Y_PADDING = 1.6;
const LABEL_FONT_SIZE = 2.6;

export class LabelRenderer {
    private readonly labels = new Map<string, LabelData>();

    private readonly cameraPos = new THREE.Vector3();

    private readonly labelPos = new THREE.Vector3();

    init(): void {
        // No DOM renderer setup is needed for troika 3D text labels.
    }

    createLabels(
        nodes: GraphNode[],
        nodeMeshes: Map<string, THREE.Object3D>,
        nodeRadii: Map<string, number>,
    ): void {
        this.dispose();

        for (const node of nodes) {
            const parent = nodeMeshes.get(node.id);
            if (!parent) {
                continue;
            }

            const radius = nodeRadii.get(node.id) ?? 3.5;
            const baseMaterial = new THREE.MeshBasicMaterial({
                color: BASE_COLOR,
                transparent: true,
                opacity: 1,
                depthWrite: false,
            });

            const text = new Text();
            text.text = node.label;
            text.fontSize = LABEL_FONT_SIZE;
            text.color = BASE_COLOR;
            text.material = baseMaterial;
            text.anchorX = 'center';
            text.anchorY = 'bottom';
            text.outlineWidth = BASE_OUTLINE_WIDTH;
            text.outlineColor = BASE_OUTLINE_COLOR;
            text.outlineBlur = BASE_OUTLINE_BLUR;
            text.position.set(0, radius + LABEL_Y_PADDING, 0);
            text.renderOrder = 1;
            text.sync();

            parent.add(text);
            this.labels.set(node.id, {
                text,
                baseMaterial,
                dimmed: false,
                highlighted: false,
            });
        }
    }

    update(camera: THREE.Camera): void {
        camera.getWorldPosition(this.cameraPos);

        for (const labelData of this.labels.values()) {
            labelData.text.quaternion.copy(camera.quaternion);

            const parentScaleX = labelData.text.parent?.scale.x ?? 1;
            const counterScale = parentScaleX !== 0 ? 1 / parentScaleX : 1;
            labelData.text.scale.setScalar(counterScale);

            labelData.text.getWorldPosition(this.labelPos);
            const distance = this.cameraPos.distanceTo(this.labelPos);
            const distanceOpacity = this.getDistanceOpacity(distance);
            const stateOpacity = labelData.dimmed ? DIMMED_OPACITY : 1;
            labelData.baseMaterial.opacity = distanceOpacity * stateOpacity;

            labelData.text.visible = distanceOpacity > 0.01;
            if (labelData.text.material instanceof THREE.Material) {
                labelData.text.material.transparent = true;
            }
        }
    }

    highlightLabels(nodeIds: string[]): void {
        const idSet = new Set(nodeIds);
        for (const [id, labelData] of this.labels.entries()) {
            if (idSet.has(id)) {
                labelData.highlighted = true;
                labelData.dimmed = false;
            } else {
                labelData.highlighted = false;
                labelData.dimmed = true;
            }

            this.applyLabelState(labelData);
        }
    }

    resetLabels(): void {
        for (const labelData of this.labels.values()) {
            labelData.highlighted = false;
            labelData.dimmed = false;
            this.applyLabelState(labelData);
        }
    }

    dispose(): void {
        for (const labelData of this.labels.values()) {
            labelData.text.removeFromParent();
            labelData.text.dispose();
            labelData.baseMaterial.dispose();
        }

        this.labels.clear();
    }

    private getDistanceOpacity(distance: number): number {
        if (distance < 100) {
            return 1;
        }
        if (distance > 500) {
            return 0;
        }

        const t = (distance - 100) / 400;
        return Math.max(0, 1 - t);
    }

    private applyLabelState(labelData: LabelData): void {
        labelData.text.color = BASE_COLOR;

        if (labelData.highlighted) {
            labelData.text.outlineColor = BASE_OUTLINE_COLOR;
            labelData.text.outlineWidth = HIGHLIGHT_OUTLINE_WIDTH;
            labelData.text.outlineBlur = HIGHLIGHT_OUTLINE_BLUR;
        } else {
            labelData.text.outlineColor = BASE_OUTLINE_COLOR;
            labelData.text.outlineWidth = BASE_OUTLINE_WIDTH;
            labelData.text.outlineBlur = BASE_OUTLINE_BLUR;
        }
    }
}