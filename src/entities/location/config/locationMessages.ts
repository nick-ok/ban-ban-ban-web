import type { LocationId, LocationMessages } from '../model/types';
import { LOC1_MESSAGES } from './loc1-messages';
import { LOC2_MESSAGES } from './loc2-messages';
import { LOC3_MESSAGES } from './loc3-messages';
import { LOC4_MESSAGES } from './loc4-messages';
import { LOC5_MESSAGES } from './loc5-messages';
import { LOC6_MESSAGES } from './loc6-messages';

export const LOCATION_MESSAGES: Record<LocationId, LocationMessages> = {
  loc1: LOC1_MESSAGES,
  loc2: LOC2_MESSAGES,
  loc3: LOC3_MESSAGES,
  loc4: LOC4_MESSAGES,
  loc5: LOC5_MESSAGES,
  loc6: LOC6_MESSAGES,
};
