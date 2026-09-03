import type { LocationId } from '@/entities/location/config/locations';
import type { ContentType, TitleType, UserType } from '@/entities/message';
import type { ScenarioId } from '@/entities/scenario/config/scenarios';

export interface BanRule {
  user?: UserType[];
  content?: ContentType[];
  title?: TitleType[];
  likes?: {
    min?: number;
    max?: number;
  };
}

export interface Scenario {
  id: ScenarioId;
  locationId: LocationId;
  order: number;
  nameKey: string;
  descriptionKey: string;
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
