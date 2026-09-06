import { useRef } from 'react';

import type { Scenario } from '@/entities/scenario';

import { useGameLoop } from '../hooks/useGameLoop';
import { usePixiApp } from '../hooks/usePixiApp';
import { useSpawnLogic } from '../hooks/useSpawnLogic';

import styles from './PixiStage.module.css';

const SPAWN_INTERVAL = 1500;

interface Props {
  scenario: Scenario;
}

export const PixiStage = ({ scenario }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const app = usePixiApp(containerRef);
  const { spawnMessage } = useSpawnLogic(scenario, app);

  useGameLoop({
    app: app,
    isActive: !!scenario && !!app,
    spawnInterval: SPAWN_INTERVAL,
    onSpawn: spawnMessage,
  });

  return <div ref={containerRef} className={styles.container} />;
};
