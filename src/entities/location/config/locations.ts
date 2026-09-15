import type { LocationApp } from '../model/types';
import { LOC_1_OWNER } from './constants';

export const LOCATIONS: LocationApp[] = [
  {
    id: 'loc1',
    name: 'HOA',
    descriptionKey: 'locations.loc1.description',
    icon: {
      name: 'hoa',
    },
    owner: LOC_1_OWNER,
    previewImage: '/images/hoa.webp',
    background: '#c3b850',
    scenarioIds: ['loc1_sc1', 'loc1_sc2', 'loc1_sc3'],
    unlocksAfter: undefined,
  },
  {
    id: 'loc2',
    name: 'Spirit Dev',
    descriptionKey: 'locations.loc2.description',
    owner: LOC_1_OWNER,
    icon: {
      name: 'spiritual',
    },
    previewImage: '/images/hoa.webp',
    background: '#fff',
    scenarioIds: ['loc2_sc1', 'loc2_sc2', 'loc2_sc3'],
    unlocksAfter: 'loc2',
  },
] as const;
