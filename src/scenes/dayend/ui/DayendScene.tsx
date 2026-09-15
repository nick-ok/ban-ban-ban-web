import { useMemo, useState } from 'react';

import { useNavigationStore } from '@/entities/navigation';
import { getGlobalAIProgress } from '@/entities/player-progress';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import {
  COMPLETION_THRESHOLD,
  getNextLocationToUnlock,
  getScenarioById,
} from '@/entities/scenario';
import {
  calculateAccuracy,
  getAccuracyGrade,
  useGameStore,
} from '@/features/game';
import { useTranslation } from '@/features/i18n';
import { Button, CountMotion, Icon, ZoomMotion } from '@/shared/ui';

import { DayendRewards } from './DayendRewards';
import { DayendStats } from './DayendStats';

import styles from './DayendScene.module.css';

export const DayEndScene = () => {
  const [isRewards, setIsRewards] = useState(false);

  const { t } = useTranslation();

  const stats = useGameStore((state) => state.stats);
  const currentScenarioId = useGameStore((state) => state.currentScenarioId);
  const startGame = useGameStore((state) => state.startGame);
  const resetGame = useGameStore((state) => state.resetGame);

  const progress = usePlayerProgressStore();
  const recordScenarioResult = usePlayerProgressStore(
    (state) => state.recordScenarioResult,
  );
  const unlockLocation = usePlayerProgressStore(
    (state) => state.unlockLocation,
  );

  const { setScene, navigateToPreview, selectedLocationId } =
    useNavigationStore();

  const computedAccuracy = calculateAccuracy(stats);
  const globalAIProgress = getGlobalAIProgress(progress);
  const { labelKey } = getAccuracyGrade(computedAccuracy);

  const isPassed = computedAccuracy >= COMPLETION_THRESHOLD;
  const { nextLocationIdToUnlock } = getNextLocationToUnlock(
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

  const handleNext = () => {
    if (!currentScenarioId) {
      return;
    }

    recordScenarioResult(currentScenarioId, computedAccuracy);
    const isAlreadyPassed =
      progress.completedScenarioIds.includes(currentScenarioId);

    if (isAlreadyPassed) {
      resetGame();
      navigateToPreview(selectedLocationId ?? 'loc1');
    }

    if (isPassed) {
      setIsRewards(true);
    }

    if (!isPassed) {
      resetGame();
      setScene('lobby');
    }
  };

  const handleSaveAndExit = () => {
    if (nextLocationIdToUnlock) {
      unlockLocation(nextLocationIdToUnlock);
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

  if (isRewards) {
    return (
      <DayendRewards
        nextLocationUnlocked={!!nextLocationIdToUnlock}
        globalAccuracy={globalAIProgress}
        onCancel={() => setIsRewards(false)}
        onSave={handleSaveAndExit}
      />
    );
  }

  return (
    <ZoomMotion className={styles.root}>
      <h1 className={styles.title}>{t(labelKey)}</h1>

      <div className={styles.accuracy}>
        <h4 className={styles.accuracyTitle} style={{ color: accuracyColor }}>
          {t('screens.dayend.accuracy')}
        </h4>

        <Icon
          name={isPassed ? 'heart-sparkling' : 'confused-face'}
          className={styles.accuracyIcon}
        />
        <CountMotion
          style={{ color: accuracyColor }}
          className={styles.accuracyValue}
          to={computedAccuracy}
          format={(val) => `${val}%`}
        />
      </div>

      <DayendStats stats={stats} isPassed={isPassed} />

      <div className={styles.actions}>
        <Button
          className={styles.button}
          variant={isPassed ? 'primary' : 'text'}
          onClick={handleNext}
        >
          <Icon
            name={isPassed ? 'check' : 'globe'}
            className={styles.buttonIcon}
          />
          <span>
            {t(isPassed ? 'screens.dayend.next' : 'screens.dayend.home')}
          </span>
        </Button>

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
