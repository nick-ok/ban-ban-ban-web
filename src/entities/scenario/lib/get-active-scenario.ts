import type { Scenario } from '../model/types';

interface Params {
  scenario: Scenario | null;
  isAutoModerationEnabled: boolean;
  isGlobalAIActive: boolean;
}

export const getActiveScenario = ({
  scenario,
  isAutoModerationEnabled,
  isGlobalAIActive,
}: Params): Scenario | null => {
  if (!scenario) {
    return null;
  }

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
    pools: {
      none: [{ user: ['female', 'male'], content: ['normal'] }],
      ban: [],
      longBan: [],
    },
  };
};
