import { LOC_1_OWNER } from '@/entities/location';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC1_SC1: Scenario = {
  id: 'loc1_sc1',
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
      senderType: 'system',
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
  order: 1,
  descriptionKey: 'scenarios.loc1_sc1.description',
  unlockThreshold: 0,
  messageSpeedRange: [0.3, 1],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('10:30'),
  allowedContent: {
    users: ['male', 'female'],
    content: ['audio'],
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
