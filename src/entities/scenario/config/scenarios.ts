import type { LocationId } from '@/entities/location';

export interface Scenario {
  id: string;
  locationId: LocationId;
  order: number;
  nameKey: string;
  descriptionKey: string;
  unlockThreshold: number;
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'house-1',
    locationId: 'house-chat',
    order: 1,
    nameKey: 'scenarios.house1.name',
    descriptionKey: 'scenarios.house1.description',
    unlockThreshold: 0,
  },
  {
    id: 'house-2',
    locationId: 'house-chat',
    order: 2,
    nameKey: 'scenarios.house2.name',
    descriptionKey: 'scenarios.house2.description',
    unlockThreshold: 75,
  },
  {
    id: 'house-3',
    locationId: 'house-chat',
    order: 3,
    nameKey: 'scenarios.house3.name',
    descriptionKey: 'scenarios.house3.description',
    unlockThreshold: 75,
  },
  {
    id: 'spiritual-1',
    locationId: 'spiritual-app',
    order: 1,
    nameKey: 'scenarios.spiritual1.name',
    descriptionKey: 'scenarios.spiritual1.description',
    unlockThreshold: 75,
  },
  {
    id: 'spiritual-2',
    locationId: 'spiritual-app',
    order: 2,
    nameKey: 'scenarios.spiritual2.name',
    descriptionKey: 'scenarios.spiritual2.description',
    unlockThreshold: 75,
  },
  {
    id: 'spiritual-3',
    locationId: 'spiritual-app',
    order: 3,
    nameKey: 'scenarios.spiritual3.name',
    descriptionKey: 'scenarios.spiritual3.description',
    unlockThreshold: 75,
  },
] as const;

export type ScenarioId = (typeof SCENARIOS)[number]['id'];
