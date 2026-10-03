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
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc2.briefing.msg3_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc2.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc2.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc2.briefing.msg6_owner',
    },
  ],
  order: 2,
  descriptionKey: 'scenarios.loc1_sc2.description',
  messageSpeedRange: [0.3, 0.8],
  spawnSpeed: 0.7,
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('15:00'),

  hasLikes: false,
  hasReports: true,

  pools: {
    none: [
      {
        user: ['male', 'female'],
        content: ['normal', 'audio'],
        title: ['empty', 'angry'],
      },
    ],
    ban: [{ content: 'caps' }],
    longBan: [{ content: 'fwords' }],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
