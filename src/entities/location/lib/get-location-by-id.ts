import { LOCATIONS } from '../config/locations';
import type { LocationId } from '../model/types';

export const getLocationById = (id: LocationId | null) => {
  return LOCATIONS.find((l) => l.id === id);
};
