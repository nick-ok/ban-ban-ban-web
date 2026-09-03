import type { LocationId } from '@/entities/location';

export interface Review {
  id: string;
  locationId: LocationId;
  textKey: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  minAccuracy: number;
  maxAccuracy: number;
}
