import { LOC_3_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC3_SC2: Scenario = {
  id: 'loc3_sc2',
  locationId: 'loc3',
  briefingSender: LOC_3_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc2.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc2.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc2.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc2.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc2.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc2.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc2.briefing.msg7_owner',
    },
  ],
  order: 2,
  descriptionKey: 'scenarios.loc2_sc3.description',
  unlockThreshold: 75,
  spawnSpeed: 0.7,
  messageSpeedRange: [0.3, 0.8],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  allowedContent: {
    users: ['female', 'male'],
    content: ['normal', 'caps'],
    titles: ['empty'],
    hasLikes: true,
  },
  banRules: {
    ban: [{ user: ['male'], content: ['audio'] }],
    longBan: [
      {
        likes: { min: 1000, max: 9999 },
        user: ['male'],
      },
    ],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
