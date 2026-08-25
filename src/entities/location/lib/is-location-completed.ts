import type { PlayerProgress } from '@/entities/player-progress';
import type { ScenarioID } from '@/entities/scenario';

import { LOCATIONS } from '../config/locations';
import type { LocationID } from '../config/locations';

export const isLocationCompleted = (
  locationId: LocationID,
  progress: PlayerProgress,
): boolean => {
  const location = LOCATIONS.find((l) => l.id === locationId);

  if (!location) {
    return false;
  }

  return location.scenarioIds.every((id) =>
    progress.completedScenarioIds.includes(id as ScenarioID),
  );
};
