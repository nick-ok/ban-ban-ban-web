import { useEffect, useMemo } from 'react';

import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import {
  getLastUnlockedLocationScenario,
  getScenarioById,
} from '@/entities/scenario';
import { GameStage, useGameStore } from '@/features/game';

import { GameClock } from './GameClock';

import styles from './GameScene.module.css';

export const GameScene = () => {
  const { selectedLocationId, selectedScenarioId } = useNavigationStore();
  const progress = usePlayerProgressStore();

  const startGame = useGameStore((state) => state.startGame);

  const activeScenario = useMemo(() => {
    if (selectedScenarioId !== null) {
      return getScenarioById(selectedScenarioId);
    }

    return getLastUnlockedLocationScenario(
      selectedLocationId ?? 'loc1',
      progress,
    );
  }, [progress, selectedLocationId, selectedScenarioId]);

  useEffect(() => {
    if (activeScenario) {
      startGame({
        startTime: activeScenario.startWorktime,
        endTime: activeScenario.endWorktime,
      });
    }
  }, [activeScenario, startGame]);

  if (!activeScenario) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.hud}>
        <h3>Location: {selectedLocationId}</h3>
        <h4>Scenario: {activeScenario.id}</h4>
        <GameClock />
      </div>

      <GameStage scenario={activeScenario} />
    </div>
  );
};
