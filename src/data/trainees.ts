import type { GraphData, GraphEdge, GraphNode, NodeType, Trainee } from '../types';

type NodeBlueprint = {
  id: string;
  label: string;
  type: NodeType;
  x: number;
};

function hashToUnit(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash / 4294967295;
}

function scatter(value: string, min: number, max: number): number {
  return min + hashToUnit(value) * (max - min);
}

function buildNodes(blueprints: NodeBlueprint[]): GraphNode[] {
  return blueprints.map((blueprint) => ({
    id: blueprint.id,
    label: blueprint.label,
    type: blueprint.type,
    position: {
      x: blueprint.x,
      y: scatter(`${blueprint.id}:y`, -15, 15),
      z: scatter(`${blueprint.id}:z`, -8, 8),
    },
    velocity: { x: 0, y: 0, z: 0 },
  }));
}

function buildEdges(trainees: Trainee[]): GraphEdge[] {
  const edgeMap = new Map<string, GraphEdge>();

  // Merge consecutive path segments and keep all trainees that traverse each edge.
  for (const trainee of trainees) {
    for (let i = 0; i < trainee.nodeSequence.length - 1; i += 1) {
      const source = trainee.nodeSequence[i];
      const target = trainee.nodeSequence[i + 1];
      const key = `${source}->${target}`;
      const existing = edgeMap.get(key);

      if (existing) {
        if (!existing.traineeIds.includes(trainee.id)) {
          existing.traineeIds.push(trainee.id);
        }
      } else {
        edgeMap.set(key, {
          source,
          target,
          traineeIds: [trainee.id],
        });
      }
    }
  }

  return Array.from(edgeMap.values());
}

export function buildGraphData(): GraphData {
  const nodeBlueprints: NodeBlueprint[] = [
    { id: 'birth-berlin', label: 'Berlin', type: 'birthplace', x: -35 },
    { id: 'birth-hamburg', label: 'Hamburg', type: 'birthplace', x: -35 },
    { id: 'birth-muenchen', label: 'Muenchen', type: 'birthplace', x: -35 },
    { id: 'birth-koeln', label: 'Koeln', type: 'birthplace', x: -35 },
    { id: 'birth-essen', label: 'Essen', type: 'birthplace', x: -35 },
    { id: 'birth-stuttgart', label: 'Stuttgart', type: 'birthplace', x: -35 },
    { id: 'birth-dresden', label: 'Dresden', type: 'birthplace', x: -35 },

    { id: 'uni-tu-muenchen', label: 'TU Muenchen', type: 'university', x: -21 },
    { id: 'uni-rwth-aachen', label: 'RWTH Aachen', type: 'university', x: -21 },
    { id: 'uni-tu-berlin', label: 'TU Berlin', type: 'university', x: -21 },
    { id: 'uni-uni-koeln', label: 'Universitaet zu Koeln', type: 'university', x: -21 },
    { id: 'uni-hpi-potsdam', label: 'HPI Potsdam', type: 'university', x: -21 },

    { id: 'field-informatik', label: 'Informatik', type: 'field', x: -7 },
    { id: 'field-wirtschaftsinformatik', label: 'Wirtschaftsinformatik', type: 'field', x: -7 },
    { id: 'field-data-science', label: 'Data Science', type: 'field', x: -7 },
    { id: 'field-elektrotechnik', label: 'Elektrotechnik', type: 'field', x: -7 },

    { id: 'degree-bsc', label: 'B.Sc.', type: 'degree', x: 7 },
    { id: 'degree-msc', label: 'M.Sc.', type: 'degree', x: 7 },

    { id: 'firstjob-working-student', label: 'Working Student IT', type: 'firstJob', x: 14 },
    { id: 'firstjob-junior-consultant', label: 'Junior IT Consultant', type: 'firstJob', x: 14 },
    { id: 'firstjob-junior-developer', label: 'Junior Software Developer', type: 'firstJob', x: 14 },


    { id: 'eon-trainee', label: 'E.ON Trainee', type: 'company', x: 17 },

    { id: 'placement-it-strategy', label: 'E.ON IT Strategy', type: 'placement', x: 20.1 },
    { id: 'placement-digital-transformation', label: 'E.ON Digital Transformation', type: 'placement', x: 21 },
    { id: 'placement-data-analytics', label: 'E.ON Data Analytics', type: 'placement', x: 21.9 },
    { id: 'placement-cloud-infrastructure', label: 'E.ON Cloud Infrastructure', type: 'placement', x: 20.7 },
    { id: 'placement-cybersecurity', label: 'E.ON Cybersecurity', type: 'placement', x: 21.4 },
    { id: 'placement-sap-solutions', label: 'E.ON SAP Solutions', type: 'placement', x: 21.7 },
    { id: 'placement-eon-digital', label: 'E.ON Digital', type: 'placement', x: 21.2 },

    { id: 'role-cloud-engineer', label: 'Cloud Engineer', type: 'currentRole', x: 35 },
    { id: 'role-data-engineer', label: 'Data Engineer', type: 'currentRole', x: 35 },
    { id: 'role-product-owner', label: 'Digital Product Owner', type: 'currentRole', x: 35 },
    { id: 'role-cybersecurity-analyst', label: 'Cybersecurity Analyst', type: 'currentRole', x: 35 },
    { id: 'role-sap-consultant', label: 'SAP Consultant', type: 'currentRole', x: 35 },
    { id: 'role-software-engineer', label: 'Software Engineer', type: 'currentRole', x: 35 },
    { id: 'role-it-strategy-manager', label: 'IT Strategy Manager', type: 'currentRole', x: 35 },
    { id: 'role-ai-engineer', label: 'AI Engineer', type: 'currentRole', x: 35 },
  ];

  const trainees: Trainee[] = [
    {
      id: 'trainee-anna',
      name: 'Anna Becker',
      color: '#00E5FF',
      nodeSequence: [
        'birth-berlin',
        'uni-tu-berlin',
        'field-informatik',
        'degree-msc',
        'firstjob-junior-developer',
        'eon-trainee',
        'placement-cloud-infrastructure',
        'placement-eon-digital',
        'role-cloud-engineer',
      ],
    },
    {
      id: 'trainee-lukas',
      name: 'Lukas Schneider',
      color: '#FF2BD6',
      nodeSequence: [
        'birth-muenchen',
        'uni-tu-muenchen',
        'field-data-science',
        'degree-msc',
        'firstjob-working-student',
        'eon-trainee',
        'placement-data-analytics',
        'placement-eon-digital',
        'role-data-engineer',
      ],
    },
    {
      id: 'trainee-sophie',
      name: 'Sophie Klein',
      color: '#7CFF3A',
      nodeSequence: [
        'birth-hamburg',
        'uni-rwth-aachen',
        'field-wirtschaftsinformatik',
        'degree-msc',
        'firstjob-junior-consultant',
        'eon-trainee',
        'placement-digital-transformation',
        'placement-it-strategy',
        'role-product-owner',
      ],
    },
    {
      id: 'trainee-emre',
      name: 'Emre Yilmaz',
      color: '#FF8A00',
      nodeSequence: [
        'birth-essen',
        'uni-rwth-aachen',
        'field-elektrotechnik',
        'degree-bsc',
        'firstjob-junior-developer',
        'eon-trainee',
        'placement-cybersecurity',
        'role-cybersecurity-analyst',
      ],
    },
    {
      id: 'trainee-maria',
      name: 'Maria Hoffmann',
      color: '#FF4F9A',
      nodeSequence: [
        'birth-koeln',
        'uni-uni-koeln',
        'field-wirtschaftsinformatik',
        'degree-bsc',
        'firstjob-working-student',
        'eon-trainee',
        'placement-sap-solutions',
        'placement-eon-digital',
        'role-sap-consultant',
      ],
    },
    {
      id: 'trainee-leon',
      name: 'Leon Wagner',
      color: '#2A7BFF',
      nodeSequence: [
        'birth-stuttgart',
        'uni-tu-muenchen',
        'field-informatik',
        'degree-bsc',
        'firstjob-junior-developer',
        'eon-trainee',
        'placement-cloud-infrastructure',
        'role-software-engineer',
      ],
    },
    {
      id: 'trainee-felix',
      name: 'Felix Neumann',
      color: '#FFD447',
      nodeSequence: [
        'birth-dresden',
        'uni-tu-muenchen',
        'field-data-science',
        'degree-msc',
        'firstjob-junior-consultant',
        'eon-trainee',
        'placement-it-strategy',
        'role-it-strategy-manager',
      ],
    },
    {
      id: 'trainee-jana',
      name: 'Jana Richter',
      color: '#A44BFF',
      nodeSequence: [
        'birth-berlin',
        'uni-hpi-potsdam',
        'field-informatik',
        'degree-msc',
        'firstjob-working-student',
        'eon-trainee',
        'placement-digital-transformation',
        'placement-data-analytics',
        'role-ai-engineer',
      ],
    },
  ];

  return {
    nodes: buildNodes(nodeBlueprints),
    edges: buildEdges(trainees),
    trainees,
  };
}