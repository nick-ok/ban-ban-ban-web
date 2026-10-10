import { LOC_2_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC2_SC2: Scenario = {
  id: 'loc2_sc2',
  locationId: 'loc2',
  briefingSender: LOC_2_OWNER,

  title: 'scenarios.loc2_sc2.title',
  timePassed: 'scenarios.loc2_sc2.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc2.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc2.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg7_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc2.briefing.msg8_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg9_owner',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc2_sc2.briefing.msg10_system',
    },
  ],
  order: 2,
  messageSpeedRange: [0.4, 0.8],
  spawnSpeed: 0.7,
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  worktime: '10:00 - 18:00',

  hasLikes: true,
  hasReports: false,

  pools: {
    none: [
      {
        user: ['male', 'female'],
        content: ['caps'],
        title: ['empty'],
      },
      {
        user: ['male', 'female'],
        content: ['caps'],
        title: ['hype'],
      },
      {
        user: ['bot'],
        content: ['ad', 'blurred'],
      },
    ],
    ban: [{ user: ['male', 'female'], content: 'normal' }],
    longBan: [
      {
        user: ['male', 'female'],
        title: 'angry',
      },
    ],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
