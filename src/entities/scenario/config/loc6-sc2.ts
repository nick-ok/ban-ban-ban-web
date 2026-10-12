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
      senderType: 'owner',
      textKey: 'scenarios.loc6_sc2.briefing.msg8_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc6_sc2.briefing.msg9_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc6_sc2.briefing.msg10_owner',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc6_sc2.briefing.msg11_system',
    },
  ],
  order: 2,
  messageSpeedRange: [0.3, 0.8],
  spawnSpeed: 0.6,
  startWorktime: timeToMinutes('15:23'),
  endWorktime: timeToMinutes('23:42'),
  worktime: '15:23 - 23:42',

  hasLikes: false,
  hasReports: false,

  pools: {
    none: [
      {
        user: ['male'],
        content: ['normal'],
        title: ['empty', 'vip'],
      },
      {
        user: ['female'],
        content: ['normal'],
        title: ['verified', 'empty'],
      },
      {
        user: 'ai',
        content: ['binary', 'error', 'blurred', 'audio'],
        title: ['empty', 'virus'],
      },
    ],
    ban: [{ user: ['female', 'male'], content: 'audio' }],
    longBan: [
      {
        user: ['female', 'male'],
        content: ['fwords', 'caps'],
        title: ['angry', 'hype'],
      },
    ],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
