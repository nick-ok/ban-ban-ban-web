import { LOC_1_OWNER } from '@/entities/location';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC1_SC1: Scenario = {
  id: 'loc1_sc1',
  locationId: 'loc1',
  briefingSender: LOC_1_OWNER,
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
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc1.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg7_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc1.briefing.msg8_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc1.briefing.msg9_owner',
    },
  ],
  order: 1,
  descriptionKey: 'scenarios.loc1_sc1.description',
  unlockThreshold: 0,
  spawnSpeed: 0.7,
  messageSpeedRange: [0.3, 1],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  allowedContent: {
    users: ['male', 'female'],
    content: ['normal', 'caps'],
    titles: ['empty'],
    hasLikes: false,
  },
  banRules: {
    ban: [{ content: ['fwords'] }],
    longBan: [{ user: ['anonymous'] }],
  },
  probabilities: {
    ban: 0.3,
    longBan: 0.2,
    none: 0.5,
  },
};
