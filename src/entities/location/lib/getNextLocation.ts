import { LOCATIONS } from '../config/locations';
import type { LocationID } from '../config/locations';

export const getNextLocation = (
  currentLocationId: LocationID,
): LocationID | undefined => {
  const next = LOCATIONS.find((l) => l.unlocksAfter === currentLocationId);
  return next?.id;
};
