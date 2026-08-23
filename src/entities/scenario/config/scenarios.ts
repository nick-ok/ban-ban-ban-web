export const SCENARIOS = [
  {
    id: 'house-1',
    locationId: 'house-chat',
    order: 1,
    nameKey: 'scenarios.house1.name',
    descriptionKey: 'scenarios.house1.description',
    unlockThreshold: 0,
    durationSec: 120,
    spawnRateMs: 1800,
    speedPxPerSec: 60,
  },
  {
    id: 'house-2',
    locationId: 'house-chat',
    order: 2,
    nameKey: 'scenarios.house2.name',
    descriptionKey: 'scenarios.house2.description',
    unlockThreshold: 75,
    durationSec: 150,
    spawnRateMs: 1600,
    speedPxPerSec: 75,
  },
  {
    id: 'house-3',
    locationId: 'house-chat',
    order: 3,
    nameKey: 'scenarios.house3.name',
    descriptionKey: 'scenarios.house3.description',
    unlockThreshold: 75,
    durationSec: 180,
    spawnRateMs: 1400,
    speedPxPerSec: 90,
  },
] as const;

export type ScenarioID = (typeof SCENARIOS)[number]['id'];
