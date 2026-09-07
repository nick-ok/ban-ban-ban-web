import type { GameStats } from '../model/types';
import { K_MISSED, K_MISSED_LONG, K_WRONG_BAN } from './constants';

export const calculateAccuracy = (stats: GameStats): number => {
  const { total, wrongBanned, missedLong, missed } = stats;

  if (total === 0) {
    return 100;
  }

  const totalPenalty =
    wrongBanned * K_WRONG_BAN + missedLong * K_MISSED_LONG + missed * K_MISSED;

  const accuracy = 100 * (1 - totalPenalty / total);

  return Math.max(0, Math.round(accuracy));
};
