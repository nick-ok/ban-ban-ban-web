import type { LocationId } from '@/entities/location/config/locations';
import type { ScenarioId } from '@/entities/scenario/config/scenarios';

export interface Scenario {
  id: ScenarioId;
  locationId: LocationId;
  order: number;
  nameKey: string;
  descriptionKey: string;
  unlockThreshold: number;
  durationSec: number;
  spawnRateMs: number;
  speedPxPerSec: number;
}
