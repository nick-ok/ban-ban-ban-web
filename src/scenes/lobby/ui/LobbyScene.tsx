import { useGameSettingsStore } from '@/entities/game-settings';
import { useNavigationStore } from '@/entities/navigation';
import { getGlobalAIProgress } from '@/entities/player-progress';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { getCanUnlockGlobalAI } from '@/features/game';
import { useTranslation } from '@/features/i18n';
import { Button, Icon, ProgressBar, ScanFX, ZoomMotion } from '@/shared/ui';
import { AppGrid } from '@/widgets/app-grid';

import styles from './LobbyScene.module.css';

const WALLPAPPER_IMG = '/images/wallpaper-lobby.webp';

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
      <img src={WALLPAPPER_IMG} className={styles.wallpaper} />

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
            <Button
              variant={'warn'}
              className={styles.runGIPBtn}
              onClick={handleRunGlobalAI}
              glow={true}
            >
              <Icon name={'lock-ai'} />
              {t('screens.lobby.runGIP')}
            </Button>
          )}
        </div>

        <div className={styles.aiProgressBar}>
          <ProgressBar
            value={globalAIProgress}
            size={'lg'}
            fillColor={'var(--color-accent-blue)'}
          />
        </div>
      </div>

      <AppGrid />

      <div className={styles.bottomActions}>
        <Button className={styles.actionBtn} onClick={() => setScene('lock')}>
          <Icon name={'lock-outline'} className={styles.actionBtnIcon} />
          {t('screens.lobby.lock')}
        </Button>

        <Button
          className={styles.actionBtn}
          onClick={() => toggleSettingsDrawer()}
        >
          <Icon name={'settings'} className={styles.actionBtnIcon} />
          {t('screens.lobby.settings')}
        </Button>
      </div>
    </ZoomMotion>
  );
};
