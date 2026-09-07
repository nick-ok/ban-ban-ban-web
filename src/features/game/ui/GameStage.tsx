import { useRef } from 'react';

import type { Scenario } from '@/entities/scenario';
import { useGameStore } from '@/features/game';

import { useGameLoop } from '../hooks/useGameLoop';
import { usePixiApp } from '../hooks/usePixiApp';
import { useSpawnLogic } from '../hooks/useSpawnLogic';

import styles from './GameStage.module.css';

interface Props {
  scenario: Scenario;
}

export const GameStage = ({ scenario }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const app = usePixiApp(containerRef);

  const isGameComplete = useGameStore((state) => state.isGameComplete);
  const isLoopActive = !!scenario && !!app && !isGameComplete;

  const { spawnMessage } = useSpawnLogic(scenario, app);

  useGameLoop({
    app: app,
    isActive: isLoopActive,
    onSpawn: spawnMessage,
  });

  return <div ref={containerRef} className={styles.root} />;
};
