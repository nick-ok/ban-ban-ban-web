import type { PlayerProgress } from '@/entities/player-progress';

import { SCENARIOS } from '../config/scenarios';
import type { ScenarioId } from '../model/types';

export const isScenarioUnlocked = (
  scenarioId: ScenarioId,
  progress: PlayerProgress,
): boolean => {
  const scenario = SCENARIOS.find((s) => s.id === scenarioId);

  if (!scenario || scenario.unlockThreshold === 0) {
    return true;
  }

  const prev = SCENARIOS.find(
    (s) =>
      s.locationId === scenario.locationId && s.order === scenario.order - 1,
  );

  if (!prev) {
    return true;
  }

  const prevResult = progress.scenarioResults[prev.id];

  return (prevResult?.bestAccuracy ?? 0) >= scenario.unlockThreshold;
};
