import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

import { getLocationById } from '@/entities/location';
import { useNavigationStore } from '@/entities/navigation';
import { PreviewContent } from '@/widgets/preview-content';

import { PreviewSplash } from './PreviewSplash';

import styles from './PreviewScene.module.css';

const SPLASH_DURATION = 650;

export const PreviewScene = () => {
  const { selectedLocationId } = useNavigationStore();

  const [phase, setPhase] = useState<'loading' | 'ready'>('loading');

  const location = getLocationById(selectedLocationId);
  const isReady = phase === 'ready';

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('ready');
    }, SPLASH_DURATION);

    return () => clearTimeout(timer);
  }, []);

  if (!location) {
    return null;
  }

  return (
    <motion.div
      layoutId={`app-bg-${selectedLocationId}`}
      className={clsx(styles.root, isReady ? styles.ready : styles.loading)}
      animate={{
        backgroundColor: isReady ? 'white' : location.background,
      }}
      exit={{ backgroundColor: location.background }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <PreviewSplash
        isReady={isReady}
        iconName={location.icon.name}
        title={location.name}
      />

      <AnimatePresence>
        {isReady && (
          <motion.div
            className={styles.preview}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200,
              delay: 0.05,
            }}
          >
            <PreviewContent />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
