import type { LocationId } from '@/entities/location/config/locations';
import type { ContentType, TitleType, UserType } from '@/entities/message';
import type { ScenarioId } from '@/entities/scenario/config/scenarios';

export interface Scenario {
  id: ScenarioId;
  locationId: LocationId;
  order: number;
  nameKey: string;
  descriptionKey: string;
  unlockThreshold: number;
}

export type BanAction = 'ban' | 'long_ban';

export interface BanRule {
  target: {
    user?: UserType[];
    content?: ContentType[];
    title?: TitleType[];
    minLikes?: number;
  };
  action: BanAction;
}
