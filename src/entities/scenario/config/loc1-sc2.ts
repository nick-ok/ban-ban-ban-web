import { LOC_1_OWNER } from '@/entities/location';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC1_SC2: Scenario = {
  id: 'loc1_sc2',
  locationId: 'loc1',
  briefingSender: LOC_1_OWNER,

  title: 'scenarios.loc1_sc2.title',
  timePassed: 'scenarios.loc1_sc2.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc2.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc2.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc2.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc2.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc2.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc2.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc2.briefing.msg7_owner',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc1_sc2.briefing.msg8_system',
    },
  ],
  order: 2,
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
        user: ['male', 'female'],
        content: ['normal'],
        title: ['empty', 'angry'],
      },
      {
        user: ['male', 'female'],
        content: ['normal'],
        title: ['verified'],
      },
    ],
    ban: [{ user: 'anonymous' }],
    longBan: [{ content: 'caps' }],
  },

  probabilities: {
    none: 0.3,
    ban: 0.5,
    longBan: 0.2,
  },
};
