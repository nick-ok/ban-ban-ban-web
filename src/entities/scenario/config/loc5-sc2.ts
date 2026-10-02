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
