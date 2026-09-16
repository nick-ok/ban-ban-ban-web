import type { ParseKeys } from '@/features/i18n';
import type { IconName } from '@/shared/ui';

import type { TierLabel } from '../model/types';

interface Tier {
  tierLabel: TierLabel;
  tierLabelKey: ParseKeys;
  gradeIcon: IconName;
}

const TIER_MAP = new Map<number, Tier>([
  [
    50,
    {
      tierLabel: 'c',
      tierLabelKey: 'screens.dayend.tierC',
      gradeIcon: 'crazy-face',
    },
  ],
  [
    75,
    {
      tierLabel: 'b',
      tierLabelKey: 'screens.dayend.tierB',
      gradeIcon: 'confused-face',
    },
  ],
  [
    99,
    {
      tierLabel: 'a',
      tierLabelKey: 'screens.dayend.tierA',
      gradeIcon: 'sparkles',
    },
  ],
  [
    100,
    {
      tierLabel: 's',
      tierLabelKey: 'screens.dayend.tierS',
      gradeIcon: 'heart-sparkling',
    },
  ],
]);

const TIER_THRESHOLDS = Array.from(TIER_MAP.keys());

export const getAccuracyGrade = (accuracy: number): Tier => {
  const clamped = Math.max(0, Math.min(100, accuracy));
  const threshold = TIER_THRESHOLDS.find((key) => clamped <= key);

  return TIER_MAP.get(threshold ?? 50)!;
};
