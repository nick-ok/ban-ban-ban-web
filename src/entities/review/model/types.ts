import type { LocationID } from '@/entities/location/config/locations';

export interface Review {
  id: string;
  locationId: LocationID;
  textKey: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  minAccuracy: number;
  maxAccuracy: number;
}
