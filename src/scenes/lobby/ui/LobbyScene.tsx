import { useGameSettingsStore } from '@/entities/game-settings';
import { useNavigationStore } from '@/entities/navigation';
import { getGlobalAIProgress } from '@/entities/player-progress';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { getCanUnlockGlobalAI } from '@/features/game';
import { useTranslation } from '@/features/i18n';
import {
  BlobsFX,
  Button,
  Icon,
  ProgressBar,
  ScanFX,
  ZoomMotion,
} from '@/shared/ui';
import { AppGrid } from '@/widgets/app-grid';

import styles from './LobbyScene.module.css';

export const LobbyScene = () => {
  const { t } = useTranslation();

  const { setScene } = useNavigationStore();
  const { toggleSettingsDrawer } = useGameSettingsStore();
  const progress = usePlayerProgressStore();

  const globalAIProgress = getGlobalAIProgress(progress);
  const canUnlockGlobalAI = getCanUnlockGlobalAI(progress);

  const handleRunGlobalAI = () => {
    if (!canUnlockGlobalAI) {
      return;
    }

    progress.runGlobalAI();
    setScene('gameend');
  };

  return (
    <ZoomMotion className={styles.root}>
      <BlobsFX />

      <ScanFX />

      <div className={styles.aiProgress}>
        <div className={styles.aiProgressActions}>
          {!canUnlockGlobalAI && (
            <img
              src={'/images/message/avatar-ai.webp'}
              className={styles.aiImage}
            />
          )}

          {canUnlockGlobalAI && (
            <Button className={styles.lockAiBtn} onClick={handleRunGlobalAI}>
              <Icon name={'lock-ai'} />
              {t('screens.lock.runGlobalGIP')}
            </Button>
          )}
        </div>

        <ProgressBar value={globalAIProgress} size={'lg'} />
      </div>

      <AppGrid />

      <div className={styles.bottomActions}>
        <Button onClick={() => setScene('lock')}>
          <Icon name={'lock-outline'} />
        </Button>

        <Button onClick={() => toggleSettingsDrawer()}>
          <Icon name={'settings'} />
        </Button>
      </div>
    </ZoomMotion>
  );
};
