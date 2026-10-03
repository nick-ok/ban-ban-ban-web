import { useMemo } from 'react';

import clsx from 'clsx';

import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import {
  COMPLETION_THRESHOLD,
  getNextToUnlock,
  getScenarioById,
} from '@/entities/scenario';
import {
  calculateAccuracy,
  getAccuracyGrade,
  useGameStore,
} from '@/features/game';
import { useTranslation } from '@/features/i18n';
import { useGameNotifications } from '@/features/notifications';
import { Button, CountMotion, Icon, ShineFX, ZoomMotion } from '@/shared/ui';

import { DayendStats } from './DayendStats';

import styles from './DayendScene.module.css';

export const DayEndScene = () => {
  const { t } = useTranslation();

  const { sendNotifications } = useGameNotifications();

  const stats = useGameStore((state) => state.stats);
  const currentScenarioId = useGameStore((state) => state.currentScenarioId);
  const currentLocationId = useNavigationStore(
    (state) => state.selectedLocationId,
  );
  const startGame = useGameStore((state) => state.startGame);
  const resetGame = useGameStore((state) => state.resetGame);

  const unlockLocation = usePlayerProgressStore(
    (state) => state.unlockLocation,
  );

  const { setScene } = useNavigationStore();

  const computedAccuracy = calculateAccuracy(stats);
  const { tierLabelKey } = getAccuracyGrade(computedAccuracy);

  const isPassed = computedAccuracy >= COMPLETION_THRESHOLD;
  const { nextLocationToUnlock } = getNextToUnlock(
    currentScenarioId ?? 'loc1_sc1',
  );

  const accuracyColor = useMemo(() => {
    if (computedAccuracy >= COMPLETION_THRESHOLD) {
      return 'var(--color-success)';
    }

    if (computedAccuracy >= 50) {
      return 'var(--color-warning)';
    }

    return 'var(--color-danger)';
  }, []);

  const handleSaveAndExit = () => {
    if (!currentScenarioId) {
      return;
    }

    if (nextLocationToUnlock?.id) {
      unlockLocation(nextLocationToUnlock.id);
    }

    if (isPassed) {
      sendNotifications({
        locationId: currentLocationId ?? 'loc1',
        scenarioId: currentScenarioId,
      });
    }

    resetGame();
    setScene('lobby');
  };

  const handleReplay = () => {
    if (!currentScenarioId) {
      return;
    }

    const activeScenario = getScenarioById(currentScenarioId);

    if (activeScenario) {
      startGame({
        startTime: activeScenario.startWorktime,
        endTime: activeScenario.endWorktime,
        scenarioId: currentScenarioId,
      });
    }

    setScene('game');
  };

  return (
    <ZoomMotion className={styles.root}>
      <div className={clsx(styles.tierLabel, isPassed && styles.passed)}>
        {isPassed && <Icon className={styles.tagIcon} name={'tag-notice'} />}

        <h1 className={styles.title}>{t(tierLabelKey)}</h1>
      </div>

      <div className={styles.accuracy}>
        <h4 className={styles.accuracyTitle} style={{ color: accuracyColor }}>
          {t('screens.dayend.accuracy')}
        </h4>

        <CountMotion
          style={{ color: accuracyColor }}
          className={styles.accuracyValue}
          to={computedAccuracy}
          format={(val) => `${val}%`}
        />
      </div>

      <DayendStats stats={stats} isPassed={isPassed} />

      <div className={styles.actions}>
        <ShineFX enabled={isPassed}>
          <Button
            className={styles.button}
            variant={isPassed ? 'primary' : 'white'}
            onClick={handleSaveAndExit}
            glow={isPassed}
          >
            <Icon name={'check'} className={styles.buttonIcon} />
            <span>{t('screens.dayend.next')}</span>
          </Button>
        </ShineFX>

        <Button
          className={styles.button}
          variant={'white'}
          onClick={handleReplay}
        >
          <Icon name={'reload'} className={styles.buttonIcon} />
          <span>{t('screens.dayend.again')}</span>
        </Button>
      </div>
    </ZoomMotion>
  );
};
