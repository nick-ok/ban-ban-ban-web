import { LOCATIONS } from '../config/locations';
import type { LocationId } from '../model/types';

export const getNextLocation = (
  currentLocationId: LocationId,
): LocationId | undefined => {
  const next = LOCATIONS.find((l) => l.unlocksAfter === currentLocationId);
  return next?.id;
};
