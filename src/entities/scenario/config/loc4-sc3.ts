import { LOC_4_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC4_SC3: Scenario = {
  id: 'loc4_sc3',
  locationId: 'loc4',
  briefingSender: LOC_4_OWNER,

  title: 'scenarios.loc4_sc3.title',
  timePassed: 'scenarios.loc4_sc3.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc3.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc3.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc3.briefing.msg3_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc3.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc4_sc3.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc3.briefing.msg6_owner',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc4_sc3.briefing.msg7_system',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc4_sc3.briefing.msg8_system',
    },
  ],
  order: 3,
  messageSpeedRange: [1, 1.3],
  spawnSpeed: 1.3,
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  worktime: '10:00 - 18:00',

  hasLikes: false,
  hasReports: false,

  pools: {
    none: [
      {
        user: ['ai'],
        content: ['normal'],
        title: 'empty',
      },
      {
        user: ['ai'],
        content: ['binary', 'error'],
        title: ['virus'],
      },
    ],
    ban: [{ user: ['male', 'female'], content: 'normal' }],
    longBan: [],
  },

  probabilities: {
    none: 0.3,
    ban: 0.7,
    longBan: 0,
  },
};
