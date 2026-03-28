import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { GraphNode } from '../types';

export class LabelRenderer {
    private labelRenderer!: CSS2DRenderer;
    private labels: Map<string, { css2dObject: CSS2DObject; element: HTMLDivElement }> = new Map();

    init(container: HTMLElement): CSS2DRenderer {
        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
        
        // Style the renderer's DOM element
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '0px';
        this.labelRenderer.domElement.style.left = '0px';
        this.labelRenderer.domElement.style.pointerEvents = 'none';
        this.labelRenderer.domElement.style.zIndex = '5';
        
        container.appendChild(this.labelRenderer.domElement);

        // Setup resize listener
        window.addEventListener('resize', () => {
            if (this.labelRenderer) {
                this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
            }
        });

        return this.labelRenderer;
    }

    createLabels(nodes: GraphNode[], scene: THREE.Scene, nodeRadii?: Map<string, number>): void {
        this.labels.clear();

        for (const node of nodes) {
            const div = document.createElement('div');
            div.className = 'node-label';
            div.textContent = node.label;

            const labelObj = new CSS2DObject(div);
            const radius = nodeRadii?.get(node.id) ?? 3.5;
            labelObj.position.set(node.position.x, node.position.y + radius + 1.5, node.position.z);
            scene.add(labelObj);

            this.labels.set(node.id, { css2dObject: labelObj, element: div });
        }
    }

    updatePositions(nodes: Array<{ id: string; position: { x: number; y: number; z: number } }>, nodeRadii?: Map<string, number>): void {
        for (const node of nodes) {
            const labelData = this.labels.get(node.id);
            if (!labelData) continue;
            const radius = nodeRadii?.get(node.id) ?? 3.5;
            labelData.css2dObject.position.set(node.position.x, node.position.y + radius + 1.5, node.position.z);
        }
    }

    update(camera: THREE.Camera): void {
        const cameraPos = new THREE.Vector3();
        camera.getWorldPosition(cameraPos);

        const labelPos = new THREE.Vector3();

        for (const labelData of this.labels.values()) {
            labelData.css2dObject.getWorldPosition(labelPos);
            const distance = cameraPos.distanceTo(labelPos);

            if (distance < 100) {
                // Full visibility
                labelData.element.style.opacity = '1';
                labelData.element.style.visibility = 'visible';
            } else if (distance >= 100 && distance <= 200) {
                // Opacity scales down linearly from 1.0 to 0.0
                const t = (distance - 100) / (200 - 100);
                const opacity = Math.max(0, 1.0 - t);
                
                labelData.element.style.opacity = opacity.toString();
                labelData.element.style.visibility = opacity > 0.05 ? 'visible' : 'hidden';
            } else {
                // Hidden
                labelData.element.style.opacity = '0';
                labelData.element.style.visibility = 'hidden';
            }
        }
    }

    highlightLabels(nodeIds: string[]): void {
        const idSet = new Set(nodeIds);
        for (const [id, labelData] of this.labels.entries()) {
            if (idSet.has(id)) {
                labelData.element.classList.add('highlighted');
                labelData.element.classList.remove('dimmed');
            } else {
                labelData.element.classList.add('dimmed');
                labelData.element.classList.remove('highlighted');
            }
        }
    }

    resetLabels(): void {
        for (const labelData of this.labels.values()) {
            labelData.element.classList.remove('highlighted', 'dimmed');
        }
    }

    getCSS2DRenderer(): CSS2DRenderer {
        return this.labelRenderer;
    }
    
    // Exposed to allow external position syncing in the main loop or force simulation
    getLabels(): Map<string, { css2dObject: CSS2DObject; element: HTMLDivElement }> {
        return this.labels;
    }
}