import { LOC_2_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC2_SC1: Scenario = {
  id: 'loc2_sc1',
  locationId: 'loc2',
  briefingSender: LOC_2_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc1.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc1.briefing.msg2_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc1.briefing.msg3_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc1.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc1.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc1.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc2_sc1.briefing.msg7_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc2_sc1.briefing.msg8_owner',
    },
  ],
  order: 1,
  descriptionKey: 'scenarios.loc2_sc1.description',
  unlockThreshold: 75,
  spawnSpeed: 1,
  messageSpeedRange: [0.4, 1.1],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  allowedContent: {
    users: ['anonymous', 'female', 'male'],
    content: ['normal', 'caps'],
    titles: ['empty', 'hype'],
    hasLikes: false,
  },
  banRules: {
    ban: [{ title: ['dissent'] }],
    longBan: [{ title: ['angry'] }],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
