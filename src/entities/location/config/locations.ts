import type { LocationApp } from '../model/types';
import {
  LOC_1_OWNER,
  LOC_2_OWNER,
  LOC_3_OWNER,
  LOC_4_OWNER,
  LOC_5_OWNER,
  LOC_6_OWNER,
} from './constants';

export const LOCATIONS: LocationApp[] = [
  {
    id: 'loc1',
    name: 'HomeApp',
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
    name: 'SoulSpace',
    descriptionKey: 'locations.loc2.description',
    owner: LOC_2_OWNER,
    icon: {
      name: 'spiritual',
    },
    previewImage: '/images/soul-space.webp',
    background: '#CCFBF1',
    scenarioIds: ['loc2_sc1', 'loc2_sc2', 'loc2_sc3'],
    unlocksAfter: 'loc2',
  },
  {
    id: 'loc3',
    name: 'Trinder',
    descriptionKey: 'locations.loc3.description',
    owner: LOC_3_OWNER,
    icon: {
      name: 'love-chat',
    },
    previewImage: '/images/trinder.webp',
    background: '#E11D48',
    scenarioIds: ['loc3_sc1', 'loc3_sc2', 'loc3_sc3'],
    unlocksAfter: 'loc2',
  },
  {
    id: 'loc4',
    name: 'Slaq',
    descriptionKey: 'locations.loc4.description',
    owner: LOC_4_OWNER,
    icon: {
      name: 'work-chat',
    },
    previewImage: '/images/slaq.webp',
    background: '#2563EB',
    scenarioIds: ['loc4_sc1', 'loc4_sc2', 'loc4_sc3'],
    unlocksAfter: 'loc2',
  },
  {
    id: 'loc5',
    name: 'ReadIt',
    descriptionKey: 'locations.loc5.description',
    owner: LOC_5_OWNER,
    icon: {
      name: 'news',
    },
    previewImage: '/images/readit.webp',
    background: '#FF4500',
    scenarioIds: ['loc5_sc1', 'loc5_sc2', 'loc5_sc3'],
    unlocksAfter: 'loc2',
  },
  {
    id: 'loc6',
    name: 'NetState',
    descriptionKey: 'locations.loc6.description',
    owner: LOC_6_OWNER,
    icon: {
      name: 'global-state',
    },
    previewImage: '/images/net-state.webp',
    background: '#005EA5',
    scenarioIds: ['loc6_sc1', 'loc6_sc2', 'loc6_sc3'],
    unlocksAfter: 'loc2',
  },
] as const;
