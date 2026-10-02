import { LOC_5_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC5_SC1: Scenario = {
  id: 'loc5_sc1',
  locationId: 'loc5',
  briefingSender: LOC_5_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc1.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc1.briefing.msg2_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc1.briefing.msg3_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc1.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc1.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc1.briefing.msg6_owner',
    },
  ],
  order: 1,
  descriptionKey: 'scenarios.loc2_sc3.description',
  messageSpeedRange: [0.3, 0.8],
  spawnSpeed: 0.7,
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('10:20'),

  hasLikes: false,

  pools: {
    none: [{ user: ['male', 'female'], content: ['normal'], title: 'empty' }],
    ban: [],
    longBan: [],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
