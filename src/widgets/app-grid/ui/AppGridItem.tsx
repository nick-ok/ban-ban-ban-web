import clsx from 'clsx';
import { motion } from 'motion/react';

import type { LocationApp } from '@/entities/location';
import { obfuscateToBinary } from '@/entities/message';
import { useNavigationStore } from '@/entities/navigation';
import { Icon, ProgressBar } from '@/shared/ui';

import styles from './AppGridItem.module.css';

interface Props {
  location: LocationApp;
  isLocked: boolean;
  isLastUnlocked: boolean;
  isGlobalAIActive: boolean;
  stats: {
    completed: number;
    total: number;
    averageAccuracy: number;
  };
}

export const AppGridItem = ({
  location,
  isLocked,
  isLastUnlocked,
  stats,
  isGlobalAIActive,
}: Props) => {
  const { navigateToPreview } = useNavigationStore();

  const { id, icon, name, background } = location;

  const scenarioProgress =
    stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className={styles.root}>
      <motion.button
        layoutId={`app-bg-${id}`}
        className={clsx(
          styles.appButton,
          isLastUnlocked && styles.lastUnlocked,
        )}
        style={{
          backgroundColor: !isGlobalAIActive
            ? background
            : 'var(--color-black)',
        }}
        disabled={isLocked}
        whileTap={
          isLocked ? {} : { scale: 0.95, transition: { duration: 0.1 } }
        }
        onClick={() => navigateToPreview(id)}
      >
        <motion.div layoutId={`app-icon-${id}`} className={styles.iconWrapper}>
          <Icon
            name={!isGlobalAIActive ? icon.name : 'gip-ai'}
            className={styles.appIcon}
          />
        </motion.div>

        {isLocked && (
          <div className={styles.lockOverlay}>
            <Icon name="lock" size={30} />
          </div>
        )}
      </motion.button>

      <div className={styles.label}>
        {isGlobalAIActive ? obfuscateToBinary(name) : name}
      </div>

      <div className={styles.bars}>
        <ProgressBar
          value={scenarioProgress}
          displayValue={`${stats.completed}/${stats.total}`}
          size="md"
          fillColor="var(--color-accent)"
        />

        <ProgressBar
          value={stats.averageAccuracy}
          size="md"
          fillColor="var(--color-accent-blue)"
        />
      </div>
    </div>
  );
};
