import { getLocationStats, LOCATIONS } from '@/entities/location';
import { getIsTotalGameComplete } from '@/entities/player-progress';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';

import { AppGridItem } from './AppGridItem';

import styles from './AppGrid.module.css';

export const AppGrid = () => {
  const progress = usePlayerProgressStore();

  const lastUnlockedLoactionId = progress.unlockedLocationIds.slice(-1)[0];
  const isTotalGameComplete = getIsTotalGameComplete(progress);

  return (
    <div className={styles.root}>
      {LOCATIONS.map((loc) => {
        const stats = getLocationStats(loc.id, progress);
        const isLocked = !progress.unlockedLocationIds.includes(loc.id);
        const isLastUnlocked =
          lastUnlockedLoactionId === loc.id && !isTotalGameComplete;

        return (
          <AppGridItem
            key={loc.id}
            location={loc}
            isLocked={isLocked}
            isLastUnlocked={isLastUnlocked}
            isGlobalAIActive={progress.isGlobalAIActive}
            stats={stats}
          />
        );
      })}
    </div>
  );
};
