import type { LocationID } from '@/entities/location/config/locations';
import type { ScenarioID } from '@/entities/scenario/config/scenarios';

export interface Scenario {
  id: ScenarioID;
  locationId: LocationID;
  order: number;
  nameKey: string;
  descriptionKey: string;
  unlockThreshold: number;
  durationSec: number;
  spawnRateMs: number;
  speedPxPerSec: number;
}
