import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

import { getLocationById } from '@/entities/location';
import { obfuscateToBinary } from '@/entities/message';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { PreviewContent } from '@/widgets/preview-content';

import { PreviewSplash } from './PreviewSplash';

import styles from './PreviewScene.module.css';

const SPLASH_DURATION = 650;

export const PreviewScene = () => {
  const [phase, setPhase] = useState<'loading' | 'ready'>('loading');

  const { selectedLocationId } = useNavigationStore();
  const isGlobalAIActive = usePlayerProgressStore(
    (state) => state.isGlobalAIActive,
  );

  const location = getLocationById(selectedLocationId);
  const isReady = phase === 'ready';

  const locationBackground = isGlobalAIActive
    ? 'var(--color-black)'
    : location?.background;

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
        backgroundColor: isReady ? 'var(--color-white)' : locationBackground,
      }}
      exit={{ backgroundColor: location.background }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <PreviewSplash
        isReady={isReady}
        iconName={isGlobalAIActive ? 'gip-ai' : location.icon.name}
        title={
          isGlobalAIActive ? obfuscateToBinary(location.name) : location.name
        }
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
