import { LOC_2_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC2_SC3: Scenario = {
  id: 'loc2_sc3',
  locationId: 'loc2',
  briefingSender: LOC_2_OWNER,

  title: 'scenarios.loc2_sc3.title',
  timePassed: 'scenarios.loc2_sc3.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg3_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg4_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc3.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg7_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc3.briefing.msg8_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg9_owner',
    },
  ],
  order: 3,
  messageSpeedRange: [0.7, 1.5],
  spawnSpeed: 1,
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  worktime: '10:00 - 18:00',

  hasLikes: true,
  hasReports: false,

  pools: {
    none: [
      {
        user: ['male', 'female'],
        content: ['ad'],
        title: ['hype', 'empty'],
      },
      {
        user: ['bot'],
        content: ['ad', 'blurred'],
      },
    ],
    ban: [
      {
        user: ['male', 'female'],
        content: ['caps'],
      },
    ],
    longBan: [],
  },

  probabilities: {
    none: 0.4,
    ban: 0.6,
    longBan: 0,
  },
};
