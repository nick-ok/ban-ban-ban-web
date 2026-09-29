import { LOC_5_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC5_SC3: Scenario = {
  id: 'loc5_sc3',
  locationId: 'loc5',
  briefingSender: LOC_5_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc3.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc3.briefing.msg2_owner',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc5_sc3.briefing.msg3_system',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc3.briefing.msg4_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc3.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc3.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc3.briefing.msg7_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc3.briefing.msg8_ai',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc5_sc3.briefing.msg9_system',
    },
  ],
  order: 3,
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
