import type { Location } from '../model/types';

type LocationData = Omit<Location, 'id'> & { id: string };

export const LOCATIONS: LocationData[] = [
  {
    id: 'house-chat',
    name: 'HOA',
    descriptionKey: 'locations.hoa.description',
    icon: {
      name: 'hoa',
      color: '#e1d039',
    },
    previewImage: '/images/hoa.webp',
    background: 'linear-gradient(180deg, #1a0a2e 0%, #16213e 100%)',
    scenarioIds: ['house-1', 'house-2', 'house-3'],
    unlocksAfter: undefined,
  },
  {
    id: 'spiritual-app',
    name: 'Spirit Dev',
    descriptionKey: 'locations.spiritual.description',
    icon: {
      name: 'spiritual',
      color: '#fff',
    },
    previewImage: '/images/hoa.webp',
    background: 'linear-gradient(180deg, #0a2e1a 0%, #0e3b2f 100%)',
    scenarioIds: ['spiritual-1', 'spiritual-2', 'spiritual-3'],
    unlocksAfter: 'house-chat',
  },
] as const;

export type LocationId = (typeof LOCATIONS)[number]['id'];
