import type { LocationID } from '@/entities/location';
import type { ScenarioID } from '@/entities/scenario';

export interface ScenarioResult {
  bestAccuracy: number;
  attemptCount: number;
}

export interface PlayerProgress {
  scenarioResults: Partial<Record<ScenarioID, ScenarioResult>>;
  completedScenarioIds: ScenarioID[];
  unlockedLocationIds: LocationID[];
}
