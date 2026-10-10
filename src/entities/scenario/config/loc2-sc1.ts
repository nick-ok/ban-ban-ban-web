import { LOC_2_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC2_SC1: Scenario = {
  id: 'loc2_sc1',
  locationId: 'loc2',
  briefingSender: LOC_2_OWNER,

  title: 'scenarios.loc2_sc1.title',
  timePassed: 'scenarios.loc2_sc1.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc1.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc1.briefing.msg2_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc1.briefing.msg3_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc1.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc1.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc1.briefing.msg6_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc1.briefing.msg7_owner',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc2_sc1.briefing.msg8_system',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc1.briefing.msg9_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc1.briefing.msg10_owner',
    },
  ],
  order: 1,
  messageSpeedRange: [0.4, 0.8],
  spawnSpeed: 0.75,
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  worktime: '10:00 - 18:00',

  hasLikes: true,
  hasReports: false,

  pools: {
    none: [
      {
        user: ['male', 'female'],
        content: ['normal', 'caps', 'ad'],
        title: 'empty',
      },
    ],
    ban: [
      {
        user: ['male', 'female'],
        content: ['caps', 'normal'],
        title: ['angry'],
      },
    ],
    longBan: [{ user: ['male', 'female'], content: ['fwords'] }],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
