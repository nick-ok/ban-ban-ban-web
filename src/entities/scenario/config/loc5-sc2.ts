import { LOC_5_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC5_SC2: Scenario = {
  id: 'loc5_sc2',
  locationId: 'loc5',
  briefingSender: LOC_5_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc2.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc2.briefing.msg2_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc2.briefing.msg3_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc2.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc2.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc2.briefing.msg6_owner',
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
