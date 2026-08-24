import type { LocationID } from '@/entities/location';

import { SCENARIOS } from '../config/scenarios';

export const getScenariosByLocation = (locationId: LocationID) => {
  return SCENARIOS.filter((s) => s.locationId === locationId);
};
