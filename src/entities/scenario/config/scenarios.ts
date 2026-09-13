import { timeToMinutes } from '../lib/time-to-minutes';
import type { BriefingSender, Scenario } from '../model/types';

const LOC_1_SENDER: BriefingSender = {
  name: '@nonna',
  position: 'CEO',
  avatarUrl: '/images/scenario/hoa-owner.webp',
};

export const SCENARIOS: Scenario[] = [
  {
    id: 'loc1_sc1',
    locationId: 'loc1',
    briefingSender: LOC_1_SENDER,
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
    order: 1,
    nameKey: 'scenarios.house1.name',
    descriptionKey: 'scenarios.house1.description',
    unlockThreshold: 0,
    messageSpeedRange: [0.3, 1],
    startWorktime: timeToMinutes('10:00'),
    endWorktime: timeToMinutes('11:00'),
    allowedContent: {
      users: ['male', 'female'],
      content: ['normal'],
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
  },
  {
    id: 'loc1_sc2',
    briefingSender: LOC_1_SENDER,
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
    locationId: 'loc1',
    order: 2,
    nameKey: 'scenarios.house2.name',
    descriptionKey: 'scenarios.house2.description',
    unlockThreshold: 75,
    messageSpeedRange: [0.3, 0.8],
    startWorktime: timeToMinutes('10:00'),
    endWorktime: timeToMinutes('11:00'),
    allowedContent: {
      users: ['anonymous', 'female', 'male'],
      content: ['normal', 'caps'],
      titles: ['empty', 'hype'],
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
  },
  {
    id: 'loc1_sc3',
    briefingSender: LOC_1_SENDER,
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
    locationId: 'loc1',
    order: 3,
    nameKey: 'scenarios.house3.name',
    descriptionKey: 'scenarios.house3.description',
    unlockThreshold: 75,
    messageSpeedRange: [0.3, 0.8],
    startWorktime: timeToMinutes('10:00'),
    endWorktime: timeToMinutes('11:00'),
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
  },
  {
    id: 'loc2_sc1',
    briefingSender: LOC_1_SENDER,
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
    locationId: 'loc2',
    order: 1,
    nameKey: 'scenarios.spiritual1.name',
    descriptionKey: 'scenarios.spiritual1.description',
    unlockThreshold: 75,
    messageSpeedRange: [0.3, 0.8],
    startWorktime: timeToMinutes('10:00'),
    endWorktime: timeToMinutes('11:00'),
    allowedContent: {
      users: ['anonymous', 'female', 'male'],
      content: ['normal', 'caps', 'fwords', 'ad', 'blurred'],
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
  },
  {
    id: 'loc2_sc2',
    briefingSender: LOC_1_SENDER,
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
    locationId: 'loc2',
    order: 2,
    nameKey: 'scenarios.spiritual2.name',
    descriptionKey: 'scenarios.spiritual2.description',
    unlockThreshold: 75,
    messageSpeedRange: [0.3, 0.8],
    startWorktime: timeToMinutes('10:00'),
    endWorktime: timeToMinutes('11:00'),
    allowedContent: {
      users: ['anonymous', 'female', 'male'],
      content: ['normal', 'caps', 'fwords', 'ad', 'blurred'],
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
  },
  {
    id: 'loc2_sc3',
    briefingSender: LOC_1_SENDER,
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
    locationId: 'loc2',
    order: 3,
    nameKey: 'scenarios.spiritual3.name',
    descriptionKey: 'scenarios.spiritual3.description',
    unlockThreshold: 75,
    messageSpeedRange: [0.3, 0.8],
    startWorktime: timeToMinutes('10:00'),
    endWorktime: timeToMinutes('11:00'),
    allowedContent: {
      users: ['anonymous', 'female', 'male'],
      content: ['normal', 'caps', 'fwords', 'ad', 'blurred'],
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
  },
] as const;
