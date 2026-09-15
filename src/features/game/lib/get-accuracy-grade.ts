import type { ParseKeys } from '@/features/i18n';

import type { TierLabel } from '../model/types';

interface Tier {
  label: TierLabel;
  labelKey: ParseKeys;
}

const TIER_MAP = new Map<number, Tier>([
  [50, { label: 'c', labelKey: 'screens.dayend.tierC' }],
  [75, { label: 'b', labelKey: 'screens.dayend.tierB' }],
  [99, { label: 'a', labelKey: 'screens.dayend.tierA' }],
  [100, { label: 's', labelKey: 'screens.dayend.tierS' }],
]);

const TIER_THRESHOLDS = Array.from(TIER_MAP.keys());

export const getAccuracyGrade = (accuracy: number): Tier => {
  const clamped = Math.max(0, Math.min(100, accuracy));
  const threshold = TIER_THRESHOLDS.find((key) => clamped <= key);

  return TIER_MAP.get(threshold ?? 50)!;
};
