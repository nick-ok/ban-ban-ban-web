import type { ScenarioID } from '@/entities/scenario';
import type { IconName } from '@/shared/ui';

export interface Location {
  id: string;
  name: string;
  descriptionKey: string;
  icon: LocationIcon;
  background: string;
  scenarioIds: readonly ScenarioID[];
  unlocksAfter?: string;
}

export interface LocationIcon {
  name: IconName;
  color: string;
}

export const LOCATIONS: Location[] = [
  {
    id: 'house-chat',
    name: 'HOC',
    descriptionKey: 'locations.houseChat.description',
    icon: {
      name: 'hoc',
      color: '#e1d039',
    },
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
    background: 'linear-gradient(180deg, #0a2e1a 0%, #0e3b2f 100%)',
    scenarioIds: ['spiritual-1', 'spiritual-2', 'spiritual-3'],
    unlocksAfter: 'house-chat',
  },
] as const;

export type LocationID = (typeof LOCATIONS)[number]['id'];
