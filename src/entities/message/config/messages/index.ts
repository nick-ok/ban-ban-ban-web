import type { ScenarioId } from '@/entities/scenario';

import type { ScenarioMessages } from '../../model/types';
import { LOC1_SC1_MESSAGES_EN } from './loc1_sc1/en';
import { LOC1_SC1_MESSAGES_RU } from './loc1_sc1/ru';
import { LOC1_SC2_MESSAGES_EN } from './loc1_sc2/en';
import { LOC1_SC2_MESSAGES_RU } from './loc1_sc2/ru';
import { LOC1_SC3_MESSAGES_EN } from './loc1_sc3/en';
import { LOC1_SC3_MESSAGES_RU } from './loc1_sc3/ru';
import { LOC2_SC1_MESSAGES_EN } from './loc2_sc1/en';
import { LOC2_SC1_MESSAGES_RU } from './loc2_sc1/ru';
import { LOC2_SC2_MESSAGES_EN } from './loc2_sc2/en';
import { LOC2_SC2_MESSAGES_RU } from './loc2_sc2/ru';
import { LOC2_SC3_MESSAGES_EN } from './loc2_sc3/en';
import { LOC2_SC3_MESSAGES_RU } from './loc2_sc3/ru';
import { LOC3_SC1_MESSAGES_EN } from './loc3_sc1/en';
import { LOC3_SC1_MESSAGES_RU } from './loc3_sc1/ru';
import { LOC3_SC2_MESSAGES_EN } from './loc3_sc2/en';
import { LOC3_SC2_MESSAGES_RU } from './loc3_sc2/ru';
import { LOC3_SC3_MESSAGES_EN } from './loc3_sc3/en';
import { LOC3_SC3_MESSAGES_RU } from './loc3_sc3/ru';
import { LOC4_SC1_MESSAGES_EN } from './loc4_sc1/en';
import { LOC4_SC1_MESSAGES_RU } from './loc4_sc1/ru';
import { LOC4_SC2_MESSAGES_EN } from './loc4_sc2/en';
import { LOC4_SC2_MESSAGES_RU } from './loc4_sc2/ru';
import { LOC4_SC3_MESSAGES_EN } from './loc4_sc3/en';
import { LOC4_SC3_MESSAGES_RU } from './loc4_sc3/ru';
import { LOC5_SC1_MESSAGES_EN } from './loc5_sc1/en';
import { LOC5_SC1_MESSAGES_RU } from './loc5_sc1/ru';
import { LOC5_SC2_MESSAGES_EN } from './loc5_sc2/en';
import { LOC5_SC2_MESSAGES_RU } from './loc5_sc2/ru';
import { LOC5_SC3_MESSAGES_EN } from './loc5_sc3/en';
import { LOC5_SC3_MESSAGES_RU } from './loc5_sc3/ru';
import { LOC6_SC1_MESSAGES_EN } from './loc6_sc1/en';
import { LOC6_SC1_MESSAGES_RU } from './loc6_sc1/ru';
import { LOC6_SC2_MESSAGES_EN } from './loc6_sc2/en';
import { LOC6_SC2_MESSAGES_RU } from './loc6_sc2/ru';
import { LOC6_SC3_MESSAGES_EN } from './loc6_sc3/en';
import { LOC6_SC3_MESSAGES_RU } from './loc6_sc3/ru';

interface ScenarioMessageMap {
  ru: ScenarioMessages;
  en: ScenarioMessages;
}

export const SCENARIO_MESSAGES: Record<ScenarioId, ScenarioMessageMap> = {
  loc1_sc1: {
    ru: LOC1_SC1_MESSAGES_RU,
    en: LOC1_SC1_MESSAGES_EN,
  },
  loc1_sc2: {
    ru: LOC1_SC2_MESSAGES_RU,
    en: LOC1_SC2_MESSAGES_EN,
  },
  loc1_sc3: {
    ru: LOC1_SC3_MESSAGES_RU,
    en: LOC1_SC3_MESSAGES_EN,
  },
  loc2_sc1: {
    ru: LOC2_SC1_MESSAGES_RU,
    en: LOC2_SC1_MESSAGES_EN,
  },
  loc2_sc2: {
    ru: LOC2_SC2_MESSAGES_RU,
    en: LOC2_SC2_MESSAGES_EN,
  },
  loc2_sc3: {
    ru: LOC2_SC3_MESSAGES_RU,
    en: LOC2_SC3_MESSAGES_EN,
  },
  loc3_sc1: {
    ru: LOC3_SC1_MESSAGES_RU,
    en: LOC3_SC1_MESSAGES_EN,
  },
  loc3_sc2: {
    ru: LOC3_SC2_MESSAGES_RU,
    en: LOC3_SC2_MESSAGES_EN,
  },
  loc3_sc3: {
    ru: LOC3_SC3_MESSAGES_RU,
    en: LOC3_SC3_MESSAGES_EN,
  },
  loc4_sc1: {
    ru: LOC4_SC1_MESSAGES_RU,
    en: LOC4_SC1_MESSAGES_EN,
  },
  loc4_sc2: {
    ru: LOC4_SC2_MESSAGES_RU,
    en: LOC4_SC2_MESSAGES_EN,
  },
  loc4_sc3: {
    ru: LOC4_SC3_MESSAGES_RU,
    en: LOC4_SC3_MESSAGES_EN,
  },
  loc5_sc1: {
    ru: LOC5_SC1_MESSAGES_RU,
    en: LOC5_SC1_MESSAGES_EN,
  },
  loc5_sc2: {
    ru: LOC5_SC2_MESSAGES_RU,
    en: LOC5_SC2_MESSAGES_EN,
  },
  loc5_sc3: {
    ru: LOC5_SC3_MESSAGES_RU,
    en: LOC5_SC3_MESSAGES_EN,
  },
  loc6_sc1: {
    ru: LOC6_SC1_MESSAGES_RU,
    en: LOC6_SC1_MESSAGES_EN,
  },
  loc6_sc2: {
    ru: LOC6_SC2_MESSAGES_RU,
    en: LOC6_SC2_MESSAGES_EN,
  },
  loc6_sc3: {
    ru: LOC6_SC3_MESSAGES_RU,
    en: LOC6_SC3_MESSAGES_EN,
  },
};

export { AD_MESSAGES, AD_BUTTON_TXT } from './ad-messages';
export { ERROR_MESSAGES } from './error-messages';
