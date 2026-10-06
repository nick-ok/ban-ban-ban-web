import { LOC_1_OWNER } from '@/entities/location';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC1_SC1: Scenario = {
  id: 'loc1_sc1',
  locationId: 'loc1',
  briefingSender: LOC_1_OWNER,

  title: 'scenarios.loc1_sc1.title',
  timePassed: 'scenarios.loc1_sc1.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc1.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg5_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc1.briefing.msg7_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg8_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc1.briefing.msg9_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg10_owner',
    },
  ],
  order: 1,
  messageSpeedRange: [0.3, 0.8],
  spawnSpeed: 0.7,
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  worktime: '10:00 - 18:00',

  hasLikes: false,
  hasReports: false,

  pools: {
    none: [
      {
        user: ['male', 'female', 'anonymous'],
        content: ['normal'],
      },
    ],
    ban: [{ content: 'caps' }],
    longBan: [{ content: 'fwords' }],
  },

  probabilities: {
    none: 0.3,
    ban: 0.4,
    longBan: 0.3,
  },
};
