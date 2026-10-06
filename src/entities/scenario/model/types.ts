import type { LocationId, LocationOwner } from '@/entities/location';
import type { ContentType, TitleType, UserType } from '@/entities/message';
import type { ParseKeys } from '@/features/i18n';

import type { SCENARIO_IDS } from '../config/constants';

export type ScenarioId = (typeof SCENARIO_IDS)[number];

export interface BriefingMessage {
  senderType: 'owner' | 'ai' | 'system';
  textKey: ParseKeys;
}

export interface BanRule {
  user?: UserType[];
  content?: ContentType[];
  title?: TitleType[];
  likes?: {
    min?: number;
    max?: number;
  };
}

export type MetricCondition = `>${number}` | `<${number}`;

export interface MessageTemplate {
  user?: UserType | UserType[];
  content?: ContentType | ContentType[];
  title?: TitleType | TitleType[];
  likes?: MetricCondition;
  reports?: MetricCondition;
}

export interface Scenario {
  id: ScenarioId;
  locationId: LocationId;

  title: ParseKeys;
  timePassed: ParseKeys;

  briefingSender: LocationOwner;
  briefingFlow: BriefingMessage[];

  order: number;
  spawnSpeed: number;
  messageSpeedRange: number[];
  startWorktime: number;
  endWorktime: number;
  worktime: string;

  hasLikes: boolean;
  hasReports: boolean;

  pools: {
    none: MessageTemplate[];
    ban: MessageTemplate[];
    longBan: MessageTemplate[];
  };

  probabilities: {
    ban: number;
    longBan: number;
    none: number;
  };
}
