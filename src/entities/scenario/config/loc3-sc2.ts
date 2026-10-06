import { LOC_3_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC3_SC2: Scenario = {
  id: 'loc3_sc2',
  locationId: 'loc3',
  briefingSender: LOC_3_OWNER,

  title: 'scenarios.loc3_sc2.title',
  timePassed: 'scenarios.loc3_sc2.timePassed',

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
    {
      senderType: 'system',
      textKey: 'scenarios.loc3_sc2.briefing.msg8_system',
    },
  ],
  order: 2,
  messageSpeedRange: [0.3, 0.8],
  spawnSpeed: 0.7,
  startWorktime: timeToMinutes('15:00'),
  endWorktime: timeToMinutes('23:00'),
  worktime: '15:00 - 23:00',

  hasLikes: true,
  hasReports: false,

  pools: {
    none: [
      {
        user: ['female'],
        content: ['normal', 'blurred', 'fwords', 'caps', 'audio'],
        title: ['empty', 'vip'],
      },
      {
        user: ['male'],
        content: ['normal'],
        title: 'angry',
      },
    ],
    ban: [{ user: 'male', content: 'audio' }],
    longBan: [{ user: 'male', title: 'vip', content: ['normal'] }],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
