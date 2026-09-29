import { LOC_6_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC6_SC2: Scenario = {
  id: 'loc6_sc2',
  locationId: 'loc6',
  briefingSender: LOC_6_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc6_sc2.briefing.msg1_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc6_sc2.briefing.msg2_ai',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc6_sc2.briefing.msg3_system',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc6_sc2.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc6_sc2.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc6_sc2.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc6_sc2.briefing.msg7_ai',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc6_sc2.briefing.msg8_system',
    },
  ],
  order: 2,
  descriptionKey: 'scenarios.loc2_sc3.description',
  unlockThreshold: 75,
  spawnSpeed: 1,
  messageSpeedRange: [0.3, 0.8],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('10:30'),
  allowedContent: {
    users: ['anonymous', 'female', 'male'],
    content: ['normal', 'caps', 'fwords', 'ad', 'blurred'],
    titles: ['empty', 'hype', 'dissent'],
    hasLikes: true,
  },
  banRules: {
    ban: [],
    longBan: [],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
