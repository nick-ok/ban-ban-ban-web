import { LOC_2_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC2_SC2: Scenario = {
  id: 'loc2_sc2',
  locationId: 'loc2',
  briefingSender: LOC_2_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc2.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg5_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc2.briefing.msg7_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc2.briefing.msg8_owner',
    },
  ],
  order: 2,
  descriptionKey: 'scenarios.loc2_sc2.description',
  unlockThreshold: 75,
  spawnSpeed: 1,
  messageSpeedRange: [0.3, 0.8],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  allowedContent: {
    users: ['anonymous', 'female', 'male'],
    content: ['caps', 'audio'],
    titles: ['empty', 'hype'],
    hasLikes: false,
  },
  banRules: {
    ban: [{ content: ['normal'] }],
    longBan: [{ title: ['dissent'] }],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
