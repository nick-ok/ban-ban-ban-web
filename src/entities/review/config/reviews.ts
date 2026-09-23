import type { LocationId } from '@/entities/location';

import type { Review } from '../model/types';
import { LOC1_REVIEWS } from './loc1-reviews';
import { LOC2_REVIEWS } from './loc2-reviews';
import { LOC3_REVIEWS } from './loc3-reviews';
import { LOC4_REVIEWS } from './loc4-reviews';
import { LOC5_REVIEWS } from './loc5-reviews';
import { LOC6_REVIEWS } from './loc6-reviews';

export const LOCATION_REVIEWS: Record<LocationId, Review[]> = {
  loc1: LOC1_REVIEWS,
  loc2: LOC2_REVIEWS,
  loc3: LOC3_REVIEWS,
  loc4: LOC4_REVIEWS,
  loc5: LOC5_REVIEWS,
  loc6: LOC6_REVIEWS,
};
