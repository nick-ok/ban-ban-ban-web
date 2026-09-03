import type { Location } from '../model/types';

export const LOCATIONS = [
  {
    id: 'loc1',
    name: 'HOA',
    descriptionKey: 'locations.loc1.description',
    icon: {
      name: 'hoa',
      color: '#e1d039',
    },
    previewImage: '/images/hoa.webp',
    background: 'linear-gradient(180deg, #1a0a2e 0%, #16213e 100%)',
    scenarioIds: ['loc1_sc1', 'loc1_sc2', 'loc1_sc3'],
    unlocksAfter: undefined,
  },
  {
    id: 'loc2',
    name: 'Spirit Dev',
    descriptionKey: 'locations.loc2.description',
    icon: {
      name: 'spiritual',
      color: '#fff',
    },
    previewImage: '/images/hoa.webp',
    background: 'linear-gradient(180deg, #0a2e1a 0%, #0e3b2f 100%)',
    scenarioIds: ['loc2_sc1', 'loc2_sc2', 'loc2_sc3'],
    unlocksAfter: 'loc2',
  },
] as const satisfies readonly Location[];
