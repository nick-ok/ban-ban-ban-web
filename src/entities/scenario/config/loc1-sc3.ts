import { LOC_1_OWNER } from '@/entities/location';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC1_SC3: Scenario = {
  id: 'loc1_sc3',
  locationId: 'loc1',
  briefingSender: LOC_1_OWNER,

  title: 'scenarios.loc1_sc3.title',
  timePassed: 'scenarios.loc1_sc3.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc3.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg5_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc3.briefing.msg7_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg8_owner',
    },
  ],
  order: 3,
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
        user: ['female', 'male'],
        content: ['normal'],
        title: 'verified',
      },
    ],
    ban: [{ title: 'angry' }],
    longBan: [{ user: ['male', 'female'], title: 'empty' }],
  },

  probabilities: {
    none: 0.4,
    ban: 0.4,
    longBan: 0.2,
  },
};
