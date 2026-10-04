import type { LocationId } from '@/entities/location';

import type { Scenario } from '../model/types';
import { getLocationScenarios } from './get-location-scenarios';

interface Params {
  locationId: LocationId | null;
  scenario: Scenario | null;
  isAutoModerationEnabled: boolean;
  isGlobalAIActive: boolean;
}

export const getActiveScenario = ({
  locationId,
  scenario,
  isAutoModerationEnabled,
  isGlobalAIActive,
}: Params): Scenario | null => {
  if (!scenario || !locationId) {
    return null;
  }

  const locationLastScenario = getLocationScenarios(locationId).slice(-1)[0];

  if (isGlobalAIActive) {
    return {
      ...scenario,
      id: 'sc_singularity',
      pools: {
        none: [{ user: ['bot', 'ai'], content: ['binary'] }],
        ban: [],
        longBan: [],
      },
    };
  }

  if (!isAutoModerationEnabled) {
    return scenario;
  }

  return {
    ...scenario,
    hasLikes: locationLastScenario.hasLikes,
    hasReports: locationLastScenario.hasReports,
    pools: {
      none: locationLastScenario.pools.none,
      ban: [],
      longBan: [],
    },
  };
};
