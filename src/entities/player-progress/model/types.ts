import type { LocationId } from '@/entities/location';
import type { ScenarioId } from '@/entities/scenario';

export interface ScenarioResult {
  bestAccuracy: number;
  attemptCount: number;
}

export interface PlayerProgress {
  scenarioResults: Partial<Record<ScenarioId, ScenarioResult>>;
  completedScenarioIds: ScenarioId[];
  unlockedLocationIds: LocationId[];
  autoModeration: Record<LocationId, boolean> | null;
  isGlobalAIActive: boolean;
}
