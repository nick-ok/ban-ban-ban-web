import { getLocationStats, LOCATIONS } from '@/entities/location';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';

import { AppGridItem } from './AppGridItem';

import styles from './AppGrid.module.css';

export const AppGrid = () => {
  const progress = usePlayerProgressStore();

  return (
    <div className={styles.grid}>
      {LOCATIONS.map((loc) => {
        const stats = getLocationStats(loc.id, progress);
        const isLocked = !progress.unlockedLocationIds.includes(loc.id);

        return (
          <AppGridItem
            key={loc.id}
            location={loc}
            isLocked={isLocked}
            stats={stats}
          />
        );
      })}
    </div>
  );
};
