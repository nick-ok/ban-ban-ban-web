import clsx from 'clsx';

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
  const scenarioResults = usePlayerProgressStore(
    (state) => state.scenarioResults,
  );

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
    setScene('briefing');
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
                disabled={!s.unlocked}
              >
                <img src={location.previewImage} className={styles.img} />

                <div
                  className={clsx(
                    styles.blurMask,
                    !s.unlocked && styles.locked,
                  )}
                />

                {!s.unlocked && (
                  <Icon name={'lock'} className={styles.lockIcon} />
                )}

                {s.unlocked && <h3 className={styles.title}>{s.order}</h3>}
              </Button>

              <ProgressBar
                value={progress}
                size={'md'}
                trackColor={'rgba(0, 0, 0, 0.15)'}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
