import { SCENARIOS } from '@/entities/scenario';

import type { PlayerProgress } from '../model/types';

export const getGlobalAIProgress = (progress: PlayerProgress): number => {
  if (!progress || !progress.scenarioResults) {
    return 0;
  }

  const totalScenarios = SCENARIOS.length;

  if (totalScenarios === 0) {
    return 0;
  }

  const results = Object.values(progress.scenarioResults);

  if (results.length === 0) {
    return 0;
  }

  const totalAccuracy = results.reduce((sum, current) => {
    const accuracyValue = current?.bestAccuracy ?? 0;

    return sum + accuracyValue;
  }, 0);

  const average = totalAccuracy / totalScenarios;

  return Math.floor(average * 10) / 10;
};
