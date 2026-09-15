import type { LocationId, LocationOwner } from '@/entities/location';
import type { ContentType, TitleType, UserType } from '@/entities/message';
import type { ParseKeys } from '@/features/i18n';

import type { SCENARIO_IDS } from '../config/constants';

export type ScenarioId = (typeof SCENARIO_IDS)[number];

export interface BriefingMessage {
  id: string;
  senderType: 'client' | 'ai' | 'system';
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
  nameKey: string;
  descriptionKey: string;
  messageSpeedRange: number[];
  // Время начала дня в минутах от 00:00 (например, 600 для 10:00)
  startWorktime: number;
  endWorktime: number;
  allowedContent: AllowedContent;
  banRules: {
    ban: BanRule[];
    longBan: BanRule[];
  };
  probabilities: {
    ban: number;
    longBan: number;
    none: number;
  };
  unlockThreshold: number;
}
