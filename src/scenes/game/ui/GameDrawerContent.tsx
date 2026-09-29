import clsx from 'clsx';

import { GameSettingsContent } from '@/entities/game-settings';
import type { LocationApp } from '@/entities/location';
import { obfuscateToBinary } from '@/entities/message';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { type Scenario } from '@/entities/scenario';
import { useTranslation } from '@/features/i18n';
import { Button, Icon } from '@/shared/ui';

import styles from './GameDrawerContent.module.css';

interface Props {
  location: LocationApp;
  scenario: Scenario;
  onClose: () => void;
}

export const GameDrawerContent = ({ location, onClose }: Props) => {
  const { t } = useTranslation();

  const { navigateToPreview, setScene } = useNavigationStore();
  const isGlobalAIActive = usePlayerProgressStore(
    (state) => state.isGlobalAIActive,
  );

  return (
    <div className={styles.root}>
      <Button className={styles.closeBtn} onClick={onClose}>
        <Icon name={'close'} className={styles.closeIcon} />
      </Button>

      <div className={styles.content}>
        <div className={styles.location}>
          <div
            className={styles.locationIconWrapper}
            style={{
              background: isGlobalAIActive
                ? 'var(--color-black)'
                : location.background,
            }}
          >
            <Icon
              name={isGlobalAIActive ? 'gip-ai' : location.icon.name}
              className={clsx(
                styles.locationIcon,
                isGlobalAIActive && styles.aiActive,
              )}
            />
          </div>

          <h2 className={styles.locationTitle}>
            {isGlobalAIActive
              ? obfuscateToBinary(location.name)
              : location.name}
          </h2>
        </div>

        <div className={styles.menu}>
          <Button
            className={styles.menuBtn}
            variant={'accentBlue'}
            onClick={() => navigateToPreview(location.id)}
          >
            {t('screens.game.preview')}
          </Button>

          <Button
            className={styles.menuBtn}
            variant={'success'}
            bordered
            onClick={() => setScene('lobby')}
          >
            {t('screens.game.appGrid')}
          </Button>

          <Button
            className={styles.menuBtn}
            variant={'success'}
            bordered
            onClick={() => setScene('lock')}
          >
            {t('screens.game.mainMenu')}
          </Button>
        </div>

        <div className={styles.gameSettings}>
          <GameSettingsContent />
        </div>
      </div>
    </div>
  );
};
