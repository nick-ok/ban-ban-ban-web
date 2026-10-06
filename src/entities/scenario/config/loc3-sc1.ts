import { LOC_3_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC3_SC1: Scenario = {
  id: 'loc3_sc1',
  locationId: 'loc3',
  briefingSender: LOC_3_OWNER,

  title: 'scenarios.loc3_sc1.title',
  timePassed: 'scenarios.loc3_sc1.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc1.briefing.msg1_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc1.briefing.msg2_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc1.briefing.msg3_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc1.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc1.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc1.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc1.briefing.msg7_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc1.briefing.msg8_owner',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc3_sc1.briefing.msg9_system',
    },
  ],
  order: 1,
  messageSpeedRange: [0.5, 0.9],
  spawnSpeed: 0.7,
  startWorktime: timeToMinutes('15:00'),
  endWorktime: timeToMinutes('23:00'),
  worktime: '15:00 - 23:00',

  hasLikes: true,
  hasReports: false,

  pools: {
    none: [
      {
        user: ['male', 'female'],
        content: ['normal', 'audio', 'caps'],
        title: ['empty', 'vip'],
      },
      {
        user: 'female',
        content: ['blurred'],
      },
    ],
    ban: [{ user: 'male', content: ['fwords'] }],
    longBan: [{ user: 'male', content: 'blurred' }],
  },

  probabilities: {
    none: 0.5,
    ban: 0.3,
    longBan: 0.2,
  },
};
