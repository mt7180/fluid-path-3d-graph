export type TraineeId = string;

export type NodeType =
  | 'birthplace'
  | 'university'
  | 'degree'
  | 'field'
  | 'firstJob'
  | 'company'
  | 'placement'
  | 'currentRole';

export type GraphNode = {
  id: string;
  label: string;
  type: NodeType;
  position: { x: number; y: number; z: number };
  velocity: { x: number; y: number; z: number };
  fixed?: boolean;
};

export type GraphEdge = {
  source: string;
  target: string;
  traineeIds: string[];
};

export type Trainee = {
  id: string;
  name: string;
  color: string;
  nodeSequence: string[];
};

export type GraphData = {
  nodes: GraphNode[];
  edges: GraphEdge[];
  trainees: Trainee[];
};

export type SelectionState = {
  hoveredTraineeId: string | null;
  selectedTraineeId: string | null;
  hoveredNodeId: string | null;
};