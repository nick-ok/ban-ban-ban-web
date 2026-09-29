import { LOC_4_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC4_SC3: Scenario = {
  id: 'loc4_sc3',
  locationId: 'loc4',
  briefingSender: LOC_4_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc3.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc3.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc3.briefing.msg3_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc3.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc4_sc3.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc3.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc4_sc3.briefing.msg7_ai',
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
    users: ['ai'],
    content: ['binary'],
    titles: ['empty'],
    hasLikes: true,
  },
  banRules: {
    ban: [{ user: ['male', 'female'], content: ['normal'] }],
    longBan: [],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
