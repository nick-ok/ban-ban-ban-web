import { LOC_3_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC3_SC3: Scenario = {
  id: 'loc3_sc3',
  locationId: 'loc3',
  briefingSender: LOC_3_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc3.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc3.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc3.briefing.msg3_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc3.briefing.msg4_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc3.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc3_sc3.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc3_sc3.briefing.msg7_owner',
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
    users: ['female', 'ai'],
    content: ['normal', 'caps'],
    titles: ['empty'],
    hasLikes: false,
  },
  banRules: {
    ban: [{ user: ['bot'], content: ['ad'] }],
    longBan: [{ title: ['angry'], user: ['female'] }],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
