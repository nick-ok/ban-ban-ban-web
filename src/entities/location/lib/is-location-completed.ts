import type { PlayerProgress } from '@/entities/player-progress';

import { LOCATIONS } from '../config/locations';
import type { LocationId } from '../model/types';

export const isLocationCompleted = (
  locationId: LocationId,
  progress: PlayerProgress,
): boolean => {
  const location = LOCATIONS.find((l) => l.id === locationId);

  if (!location) {
    return false;
  }

  return location.scenarioIds.every((id) =>
    progress.completedScenarioIds.includes(id),
  );
};
