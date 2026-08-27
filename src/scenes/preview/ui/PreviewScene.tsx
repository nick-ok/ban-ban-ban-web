import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

import { LOCATIONS } from '@/entities/location';
import { useNavigationStore } from '@/entities/navigation';
import { Icon } from '@/shared/ui';

import styles from './PreviewScene.module.css';

const SPLASH_DURATION = 600;

export const PreviewScene = () => {
  const { selectedLocationId, closePreview } = useNavigationStore();
  const [phase, setPhase] = useState<'loading' | 'ready'>('loading');

  const location = LOCATIONS.find((l) => l.id === selectedLocationId);
  const isReady = phase === 'ready';

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('ready');
    }, SPLASH_DURATION);

    return () => clearTimeout(timer);
  }, [selectedLocationId]);

  if (!location) {
    return null;
  }

  return (
    <motion.div
      layoutId={`app-bg-${selectedLocationId}`}
      className={clsx(styles.root, isReady ? styles.ready : styles.loading)}
      animate={{
        backgroundColor: isReady ? '#121214' : location.icon.color,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence>
        {!isReady && (
          <motion.div
            className={styles.splash}
            initial={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.96, x: '-50%', y: '-50%' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <Icon name={location.icon.name} size={64} />
            <div className={styles.splashTitle}>{location.name}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isReady && (
          <motion.div
            className={styles.preview}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200,
              delay: 0.05,
            }}
          >
            <p className={styles.description}>**{location.name}**</p>

            <button className={styles.startButton} onClick={closePreview}>
              CANCEL
            </button>

            <button className={styles.startButton}>RUN</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
