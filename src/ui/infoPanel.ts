import { Trainee, GraphNode, NodeType } from '../types';

export class InfoPanel {
  private panelElement: HTMLElement | null = null;
  private visible: boolean = false;

  private getNodeTypeLabel(type: NodeType): string {
    const labels: Record<NodeType, string> = {
      birthplace: "Birthplace",
      university: "University",
      degree: "Degree",
      field: "Field of Study",
      firstJob: "First Job",
      company: "Company",
      placement: "E.ON Placement",
      currentRole: "Current Role"
    };
    return labels[type] || type;
  }

  public init(container: HTMLElement): void {
    if (this.panelElement) return;

    this.panelElement = document.createElement('div');
    
    // Core structure
    this.panelElement.style.cssText = `
      position: fixed;
      top: 50%;
      right: 24px;
      transform: translateY(-50%) translateX(360px);
      width: 320px;
      background: rgba(10, 15, 30, 0.65);
      backdrop-filter: blur(24px) saturate(150%);
      -webkit-backdrop-filter: blur(24px) saturate(150%);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      padding: 24px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: rgba(255, 255, 255, 0.95);
      transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
      opacity: 0;
      pointer-events: none;
      box-sizing: border-box;
      z-index: 1000;
      max-height: 90vh;
      overflow-y: auto;
    `;

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
      position: absolute;
      top: 16px;
      right: 16px;
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.5);
      font-size: 24px;
      cursor: pointer;
      line-height: 1;
      padding: 0;
      transition: color 0.2s;
    `;
    closeBtn.addEventListener('mouseenter', () => closeBtn.style.color = '#fff');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.color = 'rgba(255, 255, 255, 0.5)');
    closeBtn.addEventListener('click', () => this.hide());
    
    this.panelElement.appendChild(closeBtn);
    
    // Content container
    const content = document.createElement('div');
    content.className = 'panel-content';
    this.panelElement.appendChild(content);

    container.appendChild(this.panelElement);
  }

  public show(trainee: Trainee, nodes: GraphNode[]): void {
    if (!this.panelElement) return;

    const content = this.panelElement.querySelector('.panel-content');
    if (!content) return;

    // Build timeline HTML
    let timelineHTML = `
      <div style="display: flex; align-items: center; margin-bottom: 24px;">
        <div style="width: 16px; height: 16px; border-radius: 50%; background: ${trainee.color}; box-shadow: 0 0 12px ${trainee.color}, 0 0 24px ${trainee.color}88; margin-right: 12px;"></div>
        <h2 style="margin: 0; font-size: 22px; font-weight: 600; color: #fff; letter-spacing: 0.5px;">${trainee.name}</h2>
      </div>
      <div style="position: relative; padding-left: 10px;">
        <div style="position: absolute; left: 14px; top: 8px; bottom: 8px; width: 2px; background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05));"></div>
    `;

    trainee.nodeSequence.forEach((nodeId) => {
      const node = nodes.find(n => n.id === nodeId);
      if (!node) return;

      timelineHTML += `
        <div style="position: relative; margin-bottom: 24px; padding-left: 24px; transition: transform 0.3s ease;">
          <div style="
            position: absolute;
            left: -4px;
            top: 4px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${trainee.color};
            box-shadow: 0 0 10px ${trainee.color}, 0 0 20px ${trainee.color}66;
            z-index: 2;
          "></div>
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: rgba(255,255,255,0.4); margin-bottom: 2px;">
            ${this.getNodeTypeLabel(node.type)}
          </div>
          <div style="font-size: 14px; color: #fff;">
            ${node.label}
          </div>
        </div>
      `;
    });

    timelineHTML += `</div>`;
    content.innerHTML = timelineHTML;

    // Show panel
    this.panelElement.style.transform = 'translateY(-50%) translateX(0)';
    this.panelElement.style.opacity = '1';
    this.panelElement.style.pointerEvents = 'auto';
    this.visible = true;
  }

  public hide(): void {
    if (!this.panelElement) return;
    this.panelElement.style.transform = 'translateY(-50%) translateX(360px)';
    this.panelElement.style.opacity = '0';
    this.panelElement.style.pointerEvents = 'none';
    this.visible = false;
  }

  public isVisible(): boolean {
    return this.visible;
  }
}