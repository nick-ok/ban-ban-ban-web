import { LOC_4_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC4_SC1: Scenario = {
  id: 'loc4_sc1',
  locationId: 'loc4',
  briefingSender: LOC_4_OWNER,

  title: 'scenarios.loc4_sc1.title',
  timePassed: 'scenarios.loc4_sc1.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg3_owner',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc4_sc1.briefing.msg4_system',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg5_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc4_sc1.briefing.msg7_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg8_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc4_sc1.briefing.msg9_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg10_owner',
    },
  ],
  order: 1,
  messageSpeedRange: [0.5, 0.8],
  spawnSpeed: 1,
  startWorktime: timeToMinutes('09:00'),
  endWorktime: timeToMinutes('17:20'),
  worktime: '09:00 - 17:20',

  hasLikes: true,
  hasReports: true,

  pools: {
    none: [
      {
        user: ['male', 'female'],
        content: ['normal'],
        title: 'empty',
      },
      {
        user: ['male', 'female'],
        content: ['blurred', 'audio'],
        title: 'empty',
      },
      {
        user: 'ai',
        content: 'normal',
        title: 'empty',
      },
    ],
    ban: [{ user: ['male', 'female'], title: 'hype' }],
    longBan: [{ user: ['male', 'female'], title: 'angry' }],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
