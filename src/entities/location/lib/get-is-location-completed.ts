import { SCENARIOS } from '@/entities/scenario';

import type { LocationId } from '../model/types';

interface Params {
  locationId: LocationId | undefined;
  completedScenarioIds: string[];
}

export const getIsLocationCompleted = ({
  locationId,
  completedScenarioIds,
}: Params): boolean => {
  const targetScenarios = SCENARIOS.filter(
    (scenario) => scenario.locationId === locationId,
  );

  if (targetScenarios.length === 0) {
    return false;
  }

  return targetScenarios.every((scenario) =>
    completedScenarioIds.includes(scenario.id),
  );
};
