import { SCENARIOS } from '../config/scenarios';
import type { ScenarioId } from '../model/types';

export const getScenarioById = (id: ScenarioId) => {
  return SCENARIOS.find((s) => s.id === id);
};
