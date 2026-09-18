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
      allowedContent: {
        users: ['ai', 'bot'],
        hasLikes: true,
        content: ['binary'],
        titles: ['empty'],
      },
      banRules: {
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
    banRules: {
      ban: [],
      longBan: [],
    },
  };
};
