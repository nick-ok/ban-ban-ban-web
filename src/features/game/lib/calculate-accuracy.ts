import type { GameStats } from '../model/types';

export const calculateAccuracy = (stats: GameStats): number => {
  const totalActions =
    stats.banned + stats.longBanned + stats.wrongBanned + stats.wrongLongBanned;

  if (totalActions === 0) {
    return 0;
  }

  const correctActions = stats.banned + stats.longBanned;

  return Math.round((correctActions / totalActions) * 10000) / 100;
};
