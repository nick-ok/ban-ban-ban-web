import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

import { useGameSettingsStore } from '@/entities/game-settings';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { useTranslation } from '@/features/i18n';
import { Button } from '@/shared/ui';

import styles from './LockScene.module.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const clockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const menuVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const buttonVariants: Variants = {
  hidden: { y: '120%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const LockScene = () => {
  const { t, i18n } = useTranslation();

  const gameSettings = useGameSettingsStore();

  const { setScene } = useNavigationStore();

  const completedScenarios = usePlayerProgressStore(
    (state) => state.completedScenarioIds,
  );
  const resetProgress = usePlayerProgressStore((state) => state.resetProgress);

  const [now, setNow] = useState(new Date());

  const hasSavedGame = completedScenarios.length > 0;

  const menuBtns = (['continue', 'newGame', 'settings'] as const).filter(
    (key) => key !== 'continue' || hasSavedGame,
  );

  const timeStr = new Intl.DateTimeFormat(i18n.language, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);

  const dateStr = new Intl.DateTimeFormat(i18n.language, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(now);

  const handleMenuButtonClick = (key: 'newGame' | 'continue' | 'settings') => {
    if (key === 'newGame') {
      resetProgress();
      setScene('lobby');
    }

    if (key === 'continue') {
      setScene('lobby');
    }

    if (key === 'settings') {
      gameSettings.toggleSettingsDrawer();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className={styles.root}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.wallpaper}>
        <div className={clsx(styles.blob, styles.blob_1)} />
        <div className={clsx(styles.blob, styles.blob_2)} />
        <div className={clsx(styles.blob, styles.blob_3)} />
        <div className={clsx(styles.blob, styles.blob_4)} />
      </div>

      <div className={styles.content}>
        <motion.div className={styles.clock} variants={clockVariants}>
          <div className={styles.time}>{timeStr}</div>
          <div className={styles.date}>{dateStr}</div>
        </motion.div>

        <motion.div className={styles.menu} variants={menuVariants}>
          {menuBtns.map((key) => (
            <motion.div
              key={key}
              variants={buttonVariants}
              whileTap={{ scale: 0.99 }}
            >
              <Button
                className={styles.btn}
                onPointerUp={() => handleMenuButtonClick(key)}
              >
                {t(`screens.lock.${key}`)}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
