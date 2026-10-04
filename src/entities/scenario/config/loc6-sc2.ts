import { LOC_6_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC6_SC2: Scenario = {
  id: 'loc6_sc2',
  locationId: 'loc6',
  briefingSender: LOC_6_OWNER,

  title: 'scenarios.loc6_sc2.title',
  timePassed: 'scenarios.loc6_sc2.timePassed',

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
  messageSpeedRange: [0.3, 0.8],
  spawnSpeed: 0.7,
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('10:20'),

  hasLikes: false,
  hasReports: false,

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
