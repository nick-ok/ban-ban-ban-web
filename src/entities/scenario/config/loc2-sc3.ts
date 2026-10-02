import { LOC_2_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC2_SC3: Scenario = {
  id: 'loc2_sc3',
  locationId: 'loc2',
  briefingSender: LOC_2_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg3_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg4_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc3.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg7_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc3.briefing.msg8_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc3.briefing.msg9_owner',
    },
  ],
  order: 3,
  descriptionKey: 'scenarios.loc2_sc3.description',
  unlockThreshold: 75,
  spawnSpeed: 1,
  messageSpeedRange: [0.3, 0.8],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  allowedContent: {
    users: ['bot'],
    content: ['ad', 'blurred'],
    titles: ['empty'],
    hasLikes: false,
  },
  banRules: {
    ban: [{ user: ['male', 'female'], content: ['caps', 'audio'] }],
    longBan: [],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
