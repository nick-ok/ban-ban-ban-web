import type { LocationID } from '../config/locations';

export interface Location {
  id: LocationID;
  nameKey: string;
  descriptionKey: string;
  icon: string;
  background: string;
  scenarioIds: readonly string[];
  unlocksAfter?: LocationID;
}
