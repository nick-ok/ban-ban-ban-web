import { SCENARIOS, type ScenarioID } from '../config/scenarios';

export const getScenarioById = (id: ScenarioID) => {
  return SCENARIOS.find((s) => s.id === id);
};
