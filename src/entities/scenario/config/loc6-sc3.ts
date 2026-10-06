import { LOC_6_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC6_SC3: Scenario = {
  id: 'loc6_sc3',
  locationId: 'loc6',
  briefingSender: LOC_6_OWNER,

  title: 'scenarios.loc6_sc3.title',
  timePassed: 'scenarios.loc6_sc3.timePassed',

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
      senderType: 'owner',
      textKey: 'scenarios.loc6_sc3.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc6_sc3.briefing.msg5_ai',
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
    {
      senderType: 'system',
      textKey: 'scenarios.loc6_sc3.briefing.msg9_system',
    },
  ],
  order: 3,
  messageSpeedRange: [0.7, 1.3],
  spawnSpeed: 0.9,
  startWorktime: timeToMinutes('03:42'),
  endWorktime: timeToMinutes('11:57'),
  worktime: '03:42 - 11:57',

  hasLikes: false,
  hasReports: false,

  pools: {
    none: [
      {
        user: ['ai'],
        content: ['binary'],
        title: 'empty',
      },
      {
        user: ['ai', 'bot'],
        title: ['virus', 'angry', 'hype', 'vip', 'verified'],
        content: ['error', 'audio', 'blurred', 'ad'],
      },
    ],
    ban: [{ user: ['male', 'female'], content: ['normal'] }],
    longBan: [],
  },

  probabilities: {
    none: 0.3,
    ban: 0.7,
    longBan: 0,
  },
};
