import type { PlayerProgress } from '@/entities/player-progress';

import { LOCATIONS } from '../config/locations';
import type { LocationId } from '../model/types';

export const getLocationStats = (
  locationId: LocationId,
  progress: PlayerProgress,
) => {
  const location = LOCATIONS.find((l) => l.id === locationId);

  if (!location) {
    return {
      location: null,
      total: 0,
      completed: 0,
      averageAccuracy: 0,
    };
  }

  const total = location.scenarioIds.length;

  const completed = location.scenarioIds.filter((id) =>
    progress.completedScenarioIds.includes(id),
  ).length;

  const accuracies = location.scenarioIds
    .map((id) => progress.scenarioResults[id]?.bestAccuracy ?? 0)
    .filter((a) => a > 0);

  const averageAccuracy =
    accuracies.length > 0
      ? Math.round(accuracies.reduce((a, b) => a + b, 0) / accuracies.length)
      : 0;

  return {
    location,
    total,
    completed,
    averageAccuracy,
  };
};
