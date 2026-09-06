import type { LocationId } from '@/entities/location';
import type { PlayerProgress } from '@/entities/player-progress';

import type { Scenario } from '../model/types';
import { getScenariosByLocation } from './get-scenarios-by-location';

export const getLastUnlockedLocationScenario = (
  locationId: LocationId,
  progress: PlayerProgress,
): Scenario => {
  const result = getScenariosByLocation(locationId).find(
    (sc) => !progress.completedScenarioIds.includes(sc.id),
  );

  if (!result) {
    const scenarios = getScenariosByLocation(locationId);

    return scenarios[scenarios.length - 1];
  }

  return result;
};
