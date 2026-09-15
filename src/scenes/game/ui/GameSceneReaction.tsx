import { useEffect } from 'react';

import { AnimatePresence, motion, type Variants } from 'motion/react';

import { useGameStore, type ReactionType } from '@/features/game';
import { Icon, type IconName } from '@/shared/ui';

import styles from './GameSceneReaction.module.css';

const CLEAR_TIMEOUT = 800;

const REACTION_ICONS: Record<ReactionType, IconName> = {
  banned: 'winking-face',
  longBanned: 'grinning-face',
  wrongBanned: 'zipper-mouth-face',
  missed: 'confused-face',
  missedLong: 'anguished-face',
};

const reactionVariants: Variants = {
  initial: { opacity: 0, scale: 0.3, y: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -15,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

export const GameSceneReaction = () => {
  const currentReaction = useGameStore((state) => state.currentReaction);
  const clearReaction = useGameStore((state) => state.clearReaction);

  useEffect(() => {
    if (!currentReaction) {
      return;
    }

    const timer = setTimeout(() => {
      clearReaction();
    }, CLEAR_TIMEOUT);

    return () => clearTimeout(timer);
  }, [currentReaction, clearReaction]);

  return (
    <AnimatePresence mode="popLayout">
      {currentReaction && (
        <motion.div
          key={currentReaction.id}
          variants={reactionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.root}
        >
          <Icon
            name={REACTION_ICONS[currentReaction.type]}
            className={styles.reactionIcon}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
