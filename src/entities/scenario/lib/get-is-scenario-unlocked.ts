import type { Scenario } from '../model/types';

interface Params {
  scenario: Scenario;
  locationScenarios: Scenario[];
  completedScenarioIds: string[];
}

export const getIsScenarioUnlocked = ({
  scenario,
  locationScenarios,
  completedScenarioIds,
}: Params) => {
  const isCompleted = completedScenarioIds.includes(scenario.id);

  if (isCompleted) {
    return true;
  }

  const index = locationScenarios.findIndex((s) => s.id === scenario.id);

  if (index === 0) {
    return true;
  }

  const previousScenario = locationScenarios[index - 1];
  const isPreviousCompleted = previousScenario
    ? completedScenarioIds.includes(previousScenario.id)
    : false;

  return isPreviousCompleted;
};
