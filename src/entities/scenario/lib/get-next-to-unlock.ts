import { getLocationById, type LocationApp } from '@/entities/location';

import { SCENARIOS } from '../config/scenarios';
import type { Scenario, ScenarioId } from '../model/types';

interface UnlockData {
  nextLocationToUnlock: LocationApp | null;
  nextScenarioToUnlock: Scenario | null;
}

export const getNextToUnlock = (currentScenarioId: ScenarioId): UnlockData => {
  const currentIdx = SCENARIOS.findIndex((s) => s.id === currentScenarioId);
  const currentScenario = SCENARIOS[currentIdx];
  const nextScenario = SCENARIOS[currentIdx + 1];

  if (currentIdx === -1 || !nextScenario) {
    return { nextLocationToUnlock: null, nextScenarioToUnlock: null };
  }

  if (nextScenario.locationId === currentScenario.locationId) {
    return { nextLocationToUnlock: null, nextScenarioToUnlock: nextScenario };
  }

  if (nextScenario.locationId !== currentScenario.locationId) {
    const location = getLocationById(nextScenario.locationId);

    return {
      nextLocationToUnlock: location ?? null,
      nextScenarioToUnlock: nextScenario,
    };
  }

  return { nextLocationToUnlock: null, nextScenarioToUnlock: null };
};
