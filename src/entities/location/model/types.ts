import type { ScenarioId } from '@/entities/scenario';
import type { ParseKeys } from '@/features/i18n';
import type { IconName } from '@/shared/ui';

import type { LOCATION_IDS } from './constants';

export type LocationId = (typeof LOCATION_IDS)[number];

export interface LocationIcon {
  name: IconName;
  color: string;
}

export interface Location {
  id: LocationId;
  name: string;
  descriptionKey: ParseKeys;
  icon: LocationIcon;
  previewImage: string;
  background: string;
  scenarioIds: readonly ScenarioId[];
  unlocksAfter?: LocationId;
}
