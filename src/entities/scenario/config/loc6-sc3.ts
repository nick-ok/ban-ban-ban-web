import { LOC_6_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC6_SC3: Scenario = {
  id: 'loc6_sc3',
  locationId: 'loc6',
  briefingSender: LOC_6_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc6_sc3.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc6_sc3.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc6_sc3.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc6_sc3.briefing.msg4_ai',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc6_sc3.briefing.msg5_system',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc6_sc3.briefing.msg6_system',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc6_sc3.briefing.msg7_system',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc6_sc3.briefing.msg8_system',
    },
  ],
  order: 3,
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
