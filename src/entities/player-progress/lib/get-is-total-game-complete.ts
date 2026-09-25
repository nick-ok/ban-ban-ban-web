import { SCENARIOS } from '@/entities/scenario';

import type { PlayerProgress } from '../model/types';

export const getIsTotalGameComplete = (progress: PlayerProgress) => {
  const scenarioIds = SCENARIOS.map((sc) => sc.id);
  const completedScenarioIds = progress.completedScenarioIds;

  return scenarioIds.length === completedScenarioIds.length;
};
