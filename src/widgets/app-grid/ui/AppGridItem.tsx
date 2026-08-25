import type { LocationIcon } from '@/entities/location/config/locations';
import { Icon, ProgressBar } from '@/shared/ui';

import styles from './AppGridItem.module.css';

interface Props {
  isLocked: boolean;
  icon: LocationIcon;
  locationName: string;
  stats: {
    completed: number;
    total: number;
    averageAccuracy: number;
  };
}

export const AppGridItem = ({ isLocked, icon, locationName, stats }: Props) => {
  const scenarioProgress =
    stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className={styles.root}>
      <button
        className={styles.appButton}
        style={{ backgroundColor: icon.color }}
        disabled={isLocked}
      >
        <Icon name={icon.name} className={styles.appIcon} />

        {isLocked && (
          <div className={styles.lockOverlay}>
            <Icon name="lock" size={30} />
          </div>
        )}
      </button>

      <div className={styles.label}>{locationName}</div>

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
