import type { BanAction } from '@/entities/message';

import type { Scenario } from '../model/types';

export const rollBanAction = (
  probabilities: Scenario['probabilities'],
): BanAction => {
  const rand = Math.random();

  if (rand < probabilities.ban) {
    return 'ban';
  }

  if (rand < probabilities.ban + probabilities.longBan) {
    return 'longBan';
  }

  return 'none';
};
