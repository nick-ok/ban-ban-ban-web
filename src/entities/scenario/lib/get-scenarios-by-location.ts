import type { LocationId } from '@/entities/location';

import { SCENARIOS } from '../config/scenarios';

export const getScenariosByLocation = (locationId: LocationId) => {
  return SCENARIOS.filter((s) => s.locationId === locationId);
};
