# vis-trainees

An interactive 3D career path visualization built with Three.js and Vite. Trainee journeys — from birthplace through university, degree, first job, and placement to current role — are rendered as glowing crystal ball nodes connected by animated light-blue paths in a force-directed graph.

> **Work In Progress**: Find the latest version of the project deployed on [GitHub Pages](https://mt7180.github.io/fluid-path-3d-graph/)

## Features

- **3D force-directed graph** — nodes auto-arrange via physics simulation with repulsion, attraction, and layer constraints
- **Crystal/water ball nodes** — physically-based translucent materials with refraction, bloom, and animated glow
- **Animated energy flow** — glowing particles travel along each career path
- **Hover & click interaction** — hover a node to highlight its trainee's path in white; click to lock selection and open a detail panel
- **Zoomable overview** — OrbitControls with scroll-to-zoom; starts framed to show all 8 career paths at once
- **Post-processing** — UnrealBloom pass for cinematic glow around nodes and paths

## Tech Stack

| Tool | Purpose |
|---|---|
| [Three.js](https://threejs.org) | 3D WebGL rendering |
| [Vite](https://vitejs.dev) | Build tooling & dev server |
| TypeScript | Type-safe source |
| Three.js EffectComposer | Post-processing / bloom |
| CSS2DRenderer | HTML labels overlaid on 3D scene |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Controls

| Input | Action |
|---|---|
| Scroll / pinch | Zoom in & out |
| Left-drag | Orbit camera |
| Right-drag | Pan |
| Hover node | Highlight trainee path |
| Click node | Lock selection, show career timeline |
| Click again / background | Deselect |

## Project Structure

```
src/
├── data/           # Trainee & graph data
├── effects/        # Energy flow & background particles
├── interaction/    # Raycaster, camera controller, selection manager
├── scene/          # Node renderer, path renderer, post-processing, scene setup
├── simulation/     # Force-directed layout engine
├── types/          # Shared TypeScript types
└── ui/             # Labels (CSS2D) & info panel
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview production build locally
```

> **Disclosure**:  
>This project was created using an **Agentic AI** approach: multi-agent orchestration.  
The codebase was produced through natural‑language instructions delegated to a coordinated team of AI agents inside a multi‑agent development environment. These agents collaborated, planned, and generated the implementation based on high‑level goals, architectural guidance, and iterative refinement.
All code, structure, and documentation emerged from this agentic process.  

The agent role definitions and multi-agent workflow are based on the work of Burke Holland - they just work like a charm!!:
- https://gist.github.com/burkeholland/0e68481f96e94bbb98134fa6efd00436
- https://www.youtube.com/watch?v=-BhfcPseWFQ
