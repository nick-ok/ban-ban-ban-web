import { LOC_4_OWNER } from '@/entities/location/config/constants';

import { timeToMinutes } from '../lib/time-to-minutes';
import type { Scenario } from '../model/types';

export const LOC4_SC1: Scenario = {
  id: 'loc4_sc1',
  locationId: 'loc4',
  briefingSender: LOC_4_OWNER,
  briefingFlow: [
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg1_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg2_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg3_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg4_owner',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg5_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc4_sc1.briefing.msg6_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg7_owner',
    },
    {
      senderType: 'ai',
      textKey: 'scenarios.loc4_sc1.briefing.msg8_ai',
    },
    {
      senderType: 'owner',
      textKey: 'scenarios.loc4_sc1.briefing.msg9_owner',
    },
  ],
  order: 1,
  descriptionKey: 'scenarios.loc2_sc3.description',
  unlockThreshold: 75,
  spawnSpeed: 0.8,
  messageSpeedRange: [0.3, 0.8],
  startWorktime: timeToMinutes('10:00'),
  endWorktime: timeToMinutes('18:00'),
  allowedContent: {
    users: ['female', 'male'],
    content: ['normal'],
    titles: ['empty'],
    hasLikes: true,
  },
  banRules: {
    ban: [{ title: ['hype'] }],
    longBan: [{ title: ['angry'] }],
  },
  probabilities: {
    ban: 0.4,
    longBan: 0.1,
    none: 0.5,
  },
};
