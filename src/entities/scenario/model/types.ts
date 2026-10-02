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

export type NumberRange = {
  min: number;
  max: number;
};

export interface MessageTemplate {
  user?: UserType | UserType[];
  content?: ContentType | ContentType[];
  title?: TitleType | TitleType[];
  likes?: NumberRange;
}

export interface AllowedContent {
  users: UserType[];
  content: ContentType[];
  hasLikes: boolean;
  titles: TitleType[];
}

export interface Scenario {
  id: ScenarioId;
  locationId: LocationId;
  briefingSender: LocationOwner;
  briefingFlow: BriefingMessage[];

  order: number;
  descriptionKey: string;
  spawnSpeed: number;
  messageSpeedRange: number[];
  startWorktime: number;
  endWorktime: number;

  hasLikes: boolean;

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
