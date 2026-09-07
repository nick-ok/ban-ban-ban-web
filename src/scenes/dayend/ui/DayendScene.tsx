import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import {
  COMPLETION_THRESHOLD,
  getNextLocationToUnlock,
  getScenarioById,
} from '@/entities/scenario';
import { calculateAccuracy, useGameStore } from '@/features/game';
import { Button } from '@/shared/ui';

import styles from './DayendScene.module.css';

export const DayEndScene = () => {
  const stats = useGameStore((state) => state.stats);
  const currentScenarioId = useGameStore((state) => state.currentScenarioId);
  const startGame = useGameStore((state) => state.startGame);
  const resetGame = useGameStore((state) => state.resetGame);

  const recordScenarioResult = usePlayerProgressStore(
    (state) => state.recordScenarioResult,
  );
  const unlockLocation = usePlayerProgressStore(
    (state) => state.unlockLocation,
  );

  const { setScene } = useNavigationStore();

  const computedAccuracy = calculateAccuracy(stats);
  const isPassed = computedAccuracy >= COMPLETION_THRESHOLD;

  const handleSaveAndExit = () => {
    if (!currentScenarioId) {
      return;
    }

    recordScenarioResult(currentScenarioId, computedAccuracy);

    if (isPassed) {
      const { nextLocationIdToUnlock } =
        getNextLocationToUnlock(currentScenarioId);

      if (nextLocationIdToUnlock) {
        unlockLocation(nextLocationIdToUnlock);
      }
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
    <div className={styles.root}>
      <h1>Day end</h1>

      <h2>ACCURACY: {computedAccuracy}%</h2>

      <pre className={styles.stats}>{JSON.stringify(stats, null, 2)}</pre>

      <div>
        <Button onClick={handleReplay}>Replay</Button>

        <Button onClick={handleSaveAndExit}>SAVE and go to lobby</Button>
      </div>
    </div>
  );
};
