import { type LocationId } from '@/entities/location';

import { SCENARIOS } from '../config/scenarios';

export const getLocationScenarios = (locationId: LocationId | null) => {
  const result = SCENARIOS.filter(
    (scenario) => scenario.locationId === locationId,
  ).sort((a, b) => a.order - b.order);

  return result;
};
