import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

import { LOCATIONS } from '@/entities/location';
import { useNavigationStore } from '@/entities/navigation';
import { PreviewContent } from '@/widgets/preview-content';

import { PreviewSceneSplash } from './PreviewSceneSplash';

import styles from './PreviewScene.module.css';

const SPLASH_DURATION = 650;

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
        backgroundColor: isReady ? '#4b4646' : location.icon.color,
      }}
      exit={{ backgroundColor: location.icon.color }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <PreviewSceneSplash
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
            <PreviewContent onClose={closePreview} location={location} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
