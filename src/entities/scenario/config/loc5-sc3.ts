import { LOC_5_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC5_SC3: Scenario = {
  id: 'loc5_sc3',
  locationId: 'loc5',
  briefingSender: LOC_5_OWNER,

  title: 'scenarios.loc5_sc3.title',
  timePassed: 'scenarios.loc5_sc3.timePassed',

  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc3.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc3.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc3.briefing.msg3_owner',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc5_sc3.briefing.msg4_system',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc3.briefing.msg5_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc3.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc3.briefing.msg7_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc5_sc3.briefing.msg8_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc5_sc3.briefing.msg9_ai',
    },
    {
      senderType: 'system',
      textKey: 'scenarios.loc5_sc3.briefing.msg10_system',
    },
  ],
  order: 3,
  messageSpeedRange: [0.5, 0.9],
  spawnSpeed: 0.7,
  startWorktime: timeToMinutes('14:00'),
  endWorktime: timeToMinutes('22:00'),
  worktime: '14:00 - 22:00',

  hasLikes: false,
  hasReports: true,

  pools: {
    none: [
      {
        user: ['male', 'female'],
        content: ['normal'],
        title: 'hype',
        reports: '>100000',
      },
      {
        user: ['male', 'female', 'bot'],
        content: ['fwords', 'blurred', 'ad', 'caps'],
        title: ['angry', 'hype', 'verified', 'vip'],
        reports: '>1000000',
      },
    ],
    ban: [{ user: ['male', 'female'], title: 'verified', reports: '<1000' }],
    longBan: [],
  },

  probabilities: {
    none: 0.5,
    ban: 0.5,
    longBan: 0,
  },
};
