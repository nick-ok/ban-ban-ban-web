import type { LocationIcon } from '@/entities/location/config/locations';
import { Icon } from '@/shared/ui';

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
  return (
    <button className={styles.gridItem} disabled={isLocked}>
      <div
        className={styles.iconWrapper}
        style={{ backgroundColor: icon.color }}
      >
        <Icon name={icon.name} className={styles.appIcon} />

        {isLocked && (
          <div className={styles.lockOverlay}>
            <Icon name="lock" size={20} />
          </div>
        )}
      </div>

      <div className={styles.label}>{locationName}</div>

      <div className={styles.stats}>
        {stats.completed}/{stats.total} · {stats.averageAccuracy}/100
      </div>
    </button>
  );
};
