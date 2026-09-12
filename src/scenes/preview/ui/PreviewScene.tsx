import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

import { getLocationById } from '@/entities/location';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { getReviewsByProgress } from '@/entities/review';
import { PreviewContent } from '@/widgets/preview-content';

import { PreviewSceneSplash } from './PreviewSceneSplash';

import styles from './PreviewScene.module.css';

const SPLASH_DURATION = 650;

export const PreviewScene = () => {
  const { selectedLocationId, closePreview, setScene } = useNavigationStore();

  const completedScenarioIds = usePlayerProgressStore(
    (state) => state.completedScenarioIds,
  );

  const [phase, setPhase] = useState<'loading' | 'ready'>('loading');

  const location = getLocationById(selectedLocationId);
  const isReady = phase === 'ready';

  const reviews = getReviewsByProgress({
    locationId: location?.id ?? 'loc1',
    completedScenarioIds,
  });

  const handleStart = () => {
    setScene('briefing');
  };

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
            <PreviewContent
              onStart={handleStart}
              onClose={closePreview}
              location={location}
              reviews={reviews}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
