import type { LocationApp } from '@/entities/location';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import {
  getIsScenarioUnlocked,
  type Scenario,
  type ScenarioId,
} from '@/entities/scenario';
import { Button, Icon, ProgressBar } from '@/shared/ui';

import styles from './PreviewContentScenarios.module.css';

interface Props {
  location: LocationApp;
  scenarios: Scenario[];
  completedIds: ScenarioId[];
}

export const PreviewContentScenarios = ({
  location,
  scenarios,
  completedIds,
}: Props) => {
  const { setSelectedScenarioId, setScene } = useNavigationStore();
  const { scenarioResults, isGlobalAIActive, autoModeration } =
    usePlayerProgressStore();

  const isAutomoderationEnabled = autoModeration?.[location.id];

  const data = scenarios.map((sc) => ({
    ...sc,
    unlocked: getIsScenarioUnlocked({
      scenario: sc,
      locationScenarios: scenarios,
      completedScenarioIds: completedIds,
    }),
  }));

  const handleScenario = (scenarioId: ScenarioId, unlocked: boolean) => {
    if (!unlocked) {
      return;
    }

    setSelectedScenarioId(scenarioId);
    setScene(isGlobalAIActive || isAutomoderationEnabled ? 'game' : 'briefing');
  };

  return (
    <div className={styles.root}>
      <div className={styles.list}>
        {data.map((s) => {
          const progress = scenarioResults[s.id]?.bestAccuracy ?? 0;

          return (
            <div key={s.id} className={styles.listItem}>
              <Button
                variant={'text'}
                className={styles.btn}
                onClick={() => handleScenario(s.id, s.unlocked)}
              >
                {s.unlocked && (
                  <img
                    src={'/images/message/avatar-anon.webp'}
                    className={styles.img}
                  />
                )}

                {!s.unlocked && (
                  <Icon name={'question'} className={styles.questionIcon} />
                )}
              </Button>

              <ProgressBar
                value={progress}
                size={'md'}
                fillColor={'var(--color-accent-blue)'}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
