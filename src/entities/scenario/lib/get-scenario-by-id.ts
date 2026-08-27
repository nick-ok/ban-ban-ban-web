import { SCENARIOS, type ScenarioId } from '../config/scenarios';

export const getScenarioById = (id: ScenarioId) => {
  return SCENARIOS.find((s) => s.id === id);
};
