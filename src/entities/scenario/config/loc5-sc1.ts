import { LOC_5_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC5_SC1: Scenario = {
  id: 'loc5_sc1',
  locationId: 'loc5',
  briefingSender: LOC_5_OWNER,

  title: 'scenarios.loc5_sc1.title',
  timePassed: 'scenarios.loc5_sc1.timePassed',

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
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc1.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc1.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc1.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc1.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc1.briefing.msg7_owner',
    },
  ],
  order: 1,
  messageSpeedRange: [0.5, 0.8],
  spawnSpeed: 0.8,
  startWorktime: timeToMinutes('14:00'),
  endWorktime: timeToMinutes('22:00'),
  worktime: '14:00 - 22:00',

  hasLikes: true,
  hasReports: false,

  pools: {
    none: [
      {
        user: ['male', 'female'],
        content: ['fwords', 'caps', 'ad'],
        title: ['angry', 'hype', 'vip'],
      },
    ],
    ban: [{ user: ['male', 'female'], content: ['normal'], title: 'empty' }],
    longBan: [{ user: 'ai', content: ['normal'], title: 'empty' }],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
