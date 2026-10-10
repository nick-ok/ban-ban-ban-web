import { LOC_3_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC3_SC3: Scenario = {
  id: 'loc3_sc3',
  locationId: 'loc3',
  briefingSender: LOC_3_OWNER,

  title: 'scenarios.loc3_sc3.title',
  timePassed: 'scenarios.loc3_sc3.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc3.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc3.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc3.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc3.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc3.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc3.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc3.briefing.msg7_owner',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc3_sc3.briefing.msg8_system',
    },
  ],
  order: 3,
  messageSpeedRange: [0.3, 0.8],
  spawnSpeed: 0.7,
  startWorktime: timeToMinutes('15:00'),
  endWorktime: timeToMinutes('23:00'),
  worktime: '15:00 - 23:00',

  hasLikes: true,
  hasReports: false,

  pools: {
    none: [
      {
        user: ['female'],
        content: ['normal', 'caps'],
        title: ['empty', 'hype'],
      },
      {
        user: ['female'],
        content: ['audio', 'fwords', 'blurred'],
        title: 'hype',
      },
      {
        user: 'bot',
        content: 'normal',
        title: 'empty',
      },
    ],
    ban: [{ user: 'bot', content: 'error', title: 'virus' }],
    longBan: [{ user: 'female', title: 'angry' }],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
