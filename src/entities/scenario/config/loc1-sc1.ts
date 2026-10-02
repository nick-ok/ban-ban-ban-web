import { LOC_1_OWNER } from '@/entities/location';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC1_SC1: Scenario = {
  id: 'loc1_sc1',
  locationId: 'loc1',
  briefingSender: LOC_1_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc1.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc1.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg7_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc1.briefing.msg8_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg9_owner',
    },
  ],
  order: 1,
  descriptionKey: 'scenarios.loc1_sc1.description',
  messageSpeedRange: [0.3, 0.8],
  spawnSpeed: 0.7,
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('15:00'),

  hasLikes: false,

  pools: {
    none: [{ user: ['male', 'female'], content: ['normal'], title: 'empty' }],
    ban: [{ content: 'fwords' }],
    longBan: [{ user: 'anonymous' }],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
