import { LOC_1_OWNER } from '@/entities/location';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC1_SC2: Scenario = {
  id: 'loc1_sc2',
  locationId: 'loc1',
  briefingSender: LOC_1_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc2.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc2.briefing.msg2_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc2.briefing.msg3_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc2.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc2.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc2.briefing.msg6_owner',
    },
  ],
  order: 2,
  descriptionKey: 'scenarios.loc1_sc2.description',
  unlockThreshold: 75,
  spawnSpeed: 0.8,
  messageSpeedRange: [0.3, 0.8],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  allowedContent: {
    users: ['female', 'male'],
    content: ['normal', 'audio'],
    titles: ['empty', 'angry'],
    hasLikes: false,
  },
  banRules: {
    ban: [{ content: ['caps'] }],
    longBan: [{ content: ['fwords'] }],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
