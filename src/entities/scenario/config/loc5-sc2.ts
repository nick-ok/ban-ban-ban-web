import { LOC_5_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC5_SC2: Scenario = {
  id: 'loc5_sc2',
  locationId: 'loc5',
  briefingSender: LOC_5_OWNER,

  title: 'scenarios.loc5_sc2.title',
  timePassed: 'scenarios.loc5_sc2.timePassed',

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
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc2.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc2.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc2.briefing.msg5_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc2.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc2.briefing.msg7_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc2.briefing.msg8_owner',
    },
  ],
  order: 2,
  messageSpeedRange: [0.3, 0.6],
  spawnSpeed: 0.7,
  startWorktime: timeToMinutes('14:00'),
  endWorktime: timeToMinutes('22:00'),
  worktime: '14:00 - 22:00',

  hasLikes: true,
  hasReports: true,

  pools: {
    none: [
      {
        user: ['male', 'female', 'anonymous'],
        content: ['caps', 'blurred', 'fwords'],
        title: ['vip', 'hype', 'angry', 'verified'],
        likes: '>100000',
      },
    ],
    ban: [
      {
        content: ['audio'],
      },
    ],
    longBan: [
      {
        user: ['male', 'female'],
        likes: '<5000',
      },
    ],
  },

  probabilities: {
    none: 0.6,
    ban: 0.3,
    longBan: 0.1,
  },
};
