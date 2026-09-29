import { LOC_1_OWNER } from '@/entities/location';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC1_SC3: Scenario = {
  id: 'loc1_sc3',
  locationId: 'loc1',
  briefingSender: LOC_1_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg3_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg4_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc3.briefing.msg5_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg6_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc1_sc3.briefing.msg7_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc1_sc3.briefing.msg8_owner',
    },
  ],
  order: 3,
  descriptionKey: 'scenarios.loc1_sc3.description',
  unlockThreshold: 75,
  spawnSpeed: 0.8,
  messageSpeedRange: [0.5, 1],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  allowedContent: {
    users: ['female', 'male'],
    content: ['normal'],
    titles: ['empty', 'dissent'],
    hasLikes: false,
  },
  banRules: {
    ban: [{ title: ['angry'] }],
    longBan: [{ content: ['audio'] }],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
