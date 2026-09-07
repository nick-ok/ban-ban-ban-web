import type { LocationId } from '@/entities/location';

import { SCENARIOS } from '../config/scenarios';
import type { ScenarioId } from '../model/types';

interface UnlockData {
  nextLocationIdToUnlock: LocationId | null;
  isTotalGameComplete: boolean;
}

export const getNextLocationToUnlock = (
  currentScenarioId: ScenarioId,
): UnlockData => {
  const currentIdx = SCENARIOS.findIndex((s) => s.id === currentScenarioId);

  if (currentIdx === -1) {
    return { nextLocationIdToUnlock: null, isTotalGameComplete: false };
  }

  const currentScenario = SCENARIOS[currentIdx];
  const nextScenario = SCENARIOS[currentIdx + 1];

  if (!nextScenario) {
    return { nextLocationIdToUnlock: null, isTotalGameComplete: true };
  }

  if (nextScenario.locationId !== currentScenario.locationId) {
    return {
      nextLocationIdToUnlock: nextScenario.locationId,
      isTotalGameComplete: false,
    };
  }

  return { nextLocationIdToUnlock: null, isTotalGameComplete: false };
};
