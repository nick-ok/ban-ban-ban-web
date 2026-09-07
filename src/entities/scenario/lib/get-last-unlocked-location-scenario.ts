import type { LocationId } from '@/entities/location';
import type { PlayerProgress } from '@/entities/player-progress';

import { SCENARIOS } from '../config/scenarios';
import type { Scenario } from '../model/types';

export const getLastUnlockedLocationScenario = (
  locationId: LocationId,
  progress: PlayerProgress,
): Scenario => {
  const locationScenarios = SCENARIOS.filter(
    (s) => s.locationId === locationId,
  );

  const result = locationScenarios.find(
    (sc) => !progress.completedScenarioIds.includes(sc.id),
  );

  if (!result) {
    return locationScenarios[locationScenarios.length - 1];
  }

  return result;
};
