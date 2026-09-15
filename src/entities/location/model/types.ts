import type { ScenarioId } from '@/entities/scenario';
import type { ParseKeys } from '@/features/i18n';
import type { IconName } from '@/shared/ui';

import type { LOCATION_IDS } from './constants';

export type LocationId = (typeof LOCATION_IDS)[number];

export interface LocationIcon {
  name: IconName;
}

export interface LocationOwner {
  name: string;
  position?: string;
  avatarUrl: string;
}

export interface LocationApp {
  id: LocationId;
  name: string;
  descriptionKey: ParseKeys;
  icon: LocationIcon;
  owner: LocationOwner;
  previewImage: string;
  background: string;
  scenarioIds: readonly ScenarioId[];
  unlocksAfter?: LocationId;
}
