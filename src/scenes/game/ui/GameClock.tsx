import { useGameStore } from '@/features/game';

import styles from './GameClock.module.css';

export const GameClock = () => {
  const gameTime = useGameStore((state) => state.gameTime);

  const hours = Math.floor(gameTime / 60);
  const minutes = Math.floor(gameTime % 60);

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return <div className={styles.root}>{formattedTime}</div>;
};
