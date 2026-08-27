import type { ParseKeys } from '@/features/i18n';
import type { IconName } from '@/shared/ui';

import type { LocationId } from '../config/locations';

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
  scenarioIds: readonly string[];
  unlocksAfter?: LocationId;
}
