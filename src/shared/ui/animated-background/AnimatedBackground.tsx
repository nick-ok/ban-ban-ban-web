import { useState } from 'react';

import clsx from 'clsx';
import { motion } from 'motion/react';

import { usePlayerProgressStore } from '@/entities/player-progress';
import { randomNumberInRange } from '@/shared/lib';

import styles from './AnimatedBackground.module.css';

const getRandomTarget = () => ({
  target: {
    x: randomNumberInRange({ min: -12, max: 12 }),
    y: randomNumberInRange({ min: -12, max: 12 }),
    scale: randomNumberInRange({ min: 1.08, max: 1.18, fractionDigits: 2 }),
    rotate: randomNumberInRange({ min: -0.8, max: 0.8, fractionDigits: 1 }),
  },
  duration: randomNumberInRange({ min: 10, max: 20, fractionDigits: 1 }),
});

export const AnimatedBackground = () => {
  const progress = usePlayerProgressStore();

  const [state, setState] = useState(getRandomTarget);

  return (
    <motion.img
      src="images/wallpaper.webp"
      className={clsx(styles.root, progress.isGlobalAIActive && styles.gameend)}
      animate={state.target}
      transition={{
        duration: state.duration,
        ease: 'easeInOut',
      }}
      onAnimationComplete={() => setState(getRandomTarget())}
      alt="Game Wallpaper"
    />
  );
};
