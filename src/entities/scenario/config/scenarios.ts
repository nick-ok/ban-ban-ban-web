import type { Scenario } from '../model/types';
import { LOC1_SC1 } from './loc1-sc1';
import { LOC1_SC2 } from './loc1-sc2';
import { LOC1_SC3 } from './loc1-sc3';
import { LOC2_SC1 } from './loc2-sc1';
import { LOC2_SC2 } from './loc2-sc2';
import { LOC2_SC3 } from './loc2-sc3';
import { LOC3_SC1 } from './loc3-sc1';
import { LOC3_SC2 } from './loc3-sc2';
import { LOC3_SC3 } from './loc3-sc3';
import { LOC4_SC1 } from './loc4-sc1';
import { LOC4_SC2 } from './loc4-sc2';
import { LOC4_SC3 } from './loc4-sc3';
import { LOC5_SC1 } from './loc5-sc1';
import { LOC5_SC2 } from './loc5-sc2';
import { LOC5_SC3 } from './loc5-sc3';
import { LOC6_SC1 } from './loc6-sc1';
import { LOC6_SC2 } from './loc6-sc2';
import { LOC6_SC3 } from './loc6-sc3';

export const SCENARIOS: Scenario[] = [
  LOC1_SC1,
  LOC1_SC2,
  LOC1_SC3,

  LOC2_SC1,
  LOC2_SC2,
  LOC2_SC3,

  LOC3_SC1,
  LOC3_SC2,
  LOC3_SC3,

  LOC4_SC1,
  LOC4_SC2,
  LOC4_SC3,

  LOC5_SC1,
  LOC5_SC2,
  LOC5_SC3,

  LOC6_SC1,
  LOC6_SC2,
  LOC6_SC3,
] as const;
