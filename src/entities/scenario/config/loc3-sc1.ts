import { LOC_3_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC3_SC1: Scenario = {
  id: 'loc3_sc1',
  locationId: 'loc3',
  briefingSender: LOC_3_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc1.briefing.msg1_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc1.briefing.msg2_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc1.briefing.msg3_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc1.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc1.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc1.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc1.briefing.msg7_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc1.briefing.msg8_owner',
    },
  ],
  order: 1,
  descriptionKey: 'scenarios.loc2_sc3.description',
  unlockThreshold: 75,
  spawnSpeed: 0.8,
  messageSpeedRange: [0.3, 0.8],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  allowedContent: {
    users: ['male', 'female'],
    content: ['normal', 'caps', 'audio'],
    titles: ['empty'],
    hasLikes: true,
  },
  banRules: {
    ban: [{ user: ['male'], content: ['fwords'] }],
    longBan: [{ user: ['male'], content: ['blurred'] }],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
