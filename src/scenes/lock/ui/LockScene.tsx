import { useEffect, useState } from 'react';

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

import { useGameSettingsStore } from '@/entities/game-settings';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { useTranslation } from '@/features/i18n';
import { useNotificationsStore } from '@/features/notifications';
import { formatDate, formatTime } from '@/shared/lib';
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
  const clearAllNotifications = useNotificationsStore(
    (state) => state.clearAllNotifications,
  );

  const [now, setNow] = useState(() => new Date());

  const hasSavedGame = completedScenarios.length > 0;

  const menuBtns = (['continue', 'newGame', 'settings', 'showIntro'] as const)
    .filter((key) => key !== 'continue' || hasSavedGame)
    .filter((key) => key !== 'showIntro' || gameSettings.isIntroSkipped);

  const timeStr = formatTime(now, i18n.language);
  const dateStr = formatDate(now, i18n.language);

  const handleMenuButtonClick = (
    key: 'newGame' | 'continue' | 'settings' | 'showIntro',
  ) => {
    if (key === 'newGame') {
      resetProgress();
      clearAllNotifications();
      setScene('lobby');
    }

    if (key === 'continue') {
      setScene('lobby');
    }

    if (key === 'settings') {
      gameSettings.toggleSettingsDrawer();
    }

    if (key === 'showIntro') {
      setScene('intro');
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
                variant={'text'}
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
