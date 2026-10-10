import { LOC_4_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC4_SC2: Scenario = {
  id: 'loc4_sc2',
  locationId: 'loc4',
  briefingSender: LOC_4_OWNER,

  title: 'scenarios.loc4_sc2.title',
  timePassed: 'scenarios.loc4_sc2.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc2.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc2.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc2.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc4_sc2.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc2.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc4_sc2.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc2.briefing.msg7_owner',
    },
  ],
  order: 2,
  messageSpeedRange: [0.3, 0.5],
  spawnSpeed: 0.5,
  startWorktime: timeToMinutes('09:00'),
  endWorktime: timeToMinutes('19:00'),
  worktime: '09:00 - 19:00',

  hasLikes: true,
  hasReports: true,

  pools: {
    none: [
      {
        user: ['male', 'female'],
        content: ['normal'],
        title: 'empty',
        reports: '<10',
      },
      {
        user: 'ai',
        content: ['normal', 'binary'],
        reports: '<1',
      },
    ],
    ban: [{ user: ['male', 'female'], content: ['blurred', 'audio'] }],
    longBan: [{ user: ['male', 'female'], reports: '>10' }],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
