import { calculateAccuracy, useGameStore } from '@/features/game';

import styles from './DayendScene.module.css';

export const DayEndScene = () => {
  const stats = useGameStore((state) => state.stats);

  const computedAccuracy = calculateAccuracy(stats);

  return (
    <div className={styles.root}>
      <h1>Day end</h1>

      <h2>ACCURACY: {computedAccuracy}%</h2>

      <div className={styles.stats}>{JSON.stringify(stats, null, 2)}</div>
    </div>
  );
};
