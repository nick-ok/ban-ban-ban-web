import { getGlobalAIProgress } from '@/entities/player-progress/lib/get-global-ai-progress';
import type { PlayerProgress } from '@/entities/player-progress/model/types';
import { SCENARIOS } from '@/entities/scenario';

export const getCanUnlockGlobalAI = (progress: PlayerProgress): boolean => {
  if (!progress) {
    return false;
  }

  const globalProgress = getGlobalAIProgress(progress);

  if (globalProgress < 100) {
    return false;
  }

  const totalScenariosCount = SCENARIOS.length;

  if (totalScenariosCount === 0) {
    return false;
  }

  const completedCount = progress.completedScenarioIds?.length ?? 0;

  return completedCount === totalScenariosCount;
};
