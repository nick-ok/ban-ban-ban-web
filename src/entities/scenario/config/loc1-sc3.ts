import { LOC_1_OWNER } from '@/entities/location';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC1_SC3: Scenario = {
  id: 'loc1_sc3',
  locationId: 'loc1',
  briefingSender: LOC_1_OWNER,
  briefingFlow: [
    {
      id: 'b1_1',
      senderType: 'client',
      textKey: 'scenarios.loc1_sc1.briefing.msg1',
    },
    {
      id: 'b1_2',
      senderType: 'client',
      textKey: 'scenarios.loc1_sc1.briefing.msg2',
    },
    {
      id: 'b1_3',
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc1.briefing.msg3',
    },
    {
      id: 'b1_4',
      senderType: 'client',
      textKey: 'scenarios.loc1_sc1.briefing.msg4',
    },
  ],
  order: 3,
  descriptionKey: 'scenarios.loc1_sc3.description',
  unlockThreshold: 75,
  spawnSpeed: 1.5,
  messageSpeedRange: [0.3, 0.8],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('10:30'),
  allowedContent: {
    users: ['anonymous', 'female', 'male'],
    content: ['normal', 'caps', 'fwords'],
    titles: ['empty', 'hype', 'dissent'],
    hasLikes: true,
  },
  banRules: {
    ban: [],
    longBan: [],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
