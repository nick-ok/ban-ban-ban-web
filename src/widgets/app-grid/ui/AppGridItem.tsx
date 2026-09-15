import { motion } from 'motion/react';

import type { LocationApp } from '@/entities/location';
import { useNavigationStore } from '@/entities/navigation';
import { Icon, ProgressBar } from '@/shared/ui';

import styles from './AppGridItem.module.css';

interface Props {
  location: LocationApp;
  isLocked: boolean;
  stats: {
    completed: number;
    total: number;
    averageAccuracy: number;
  };
}

export const AppGridItem = ({ location, isLocked, stats }: Props) => {
  const { navigateToPreview } = useNavigationStore();

  const { id, icon, name, background } = location;

  const scenarioProgress =
    stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className={styles.root}>
      <motion.button
        layoutId={`app-bg-${id}`}
        className={styles.appButton}
        style={{ backgroundColor: background }}
        disabled={isLocked}
        whileTap={
          isLocked ? {} : { scale: 0.95, transition: { duration: 0.1 } }
        }
        onClick={() => navigateToPreview(id)}
      >
        <motion.div layoutId={`app-icon-${id}`} className={styles.iconWrapper}>
          <Icon name={icon.name} className={styles.appIcon} />
        </motion.div>

        {isLocked && (
          <div className={styles.lockOverlay}>
            <Icon name="lock" size={30} />
          </div>
        )}
      </motion.button>

      <div className={styles.label}>{name}</div>

      <div className={styles.bars}>
        <ProgressBar
          value={scenarioProgress}
          displayValue={`${stats.completed}/${stats.total}`}
          size="md"
          fillColor="#07ff8b"
        />

        <ProgressBar
          value={stats.averageAccuracy}
          size="sm"
          fillColor="#00aaff"
        />
      </div>
    </div>
  );
};
