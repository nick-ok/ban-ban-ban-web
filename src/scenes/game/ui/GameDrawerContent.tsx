import type { LocationApp } from '@/entities/location';
import { useNavigationStore } from '@/entities/navigation';
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

  return (
    <div className={styles.root}>
      <Button className={styles.closeBtn} onClick={onClose}>
        <Icon name={'close'} className={styles.closeIcon} />
      </Button>

      <div className={styles.content}>
        <div className={styles.location}>
          <div
            className={styles.locationIconWrapper}
            style={{ background: location.background }}
          >
            <Icon name={location.icon.name} className={styles.locationIcon} />
          </div>

          <h2 className={styles.locationTitle}>{location.name}</h2>
        </div>

        <div className={styles.menu}>
          <Button
            className={styles.menuBtn}
            variant={'primary'}
            onClick={() => navigateToPreview(location.id)}
          >
            {t('screens.game.preview')}
          </Button>

          <Button
            className={styles.menuBtn}
            variant={'success'}
            onClick={() => setScene('lobby')}
          >
            {t('screens.game.appGrid')}
          </Button>

          <Button
            className={styles.menuBtn}
            variant={'danger'}
            bordered
            onClick={() => setScene('lock')}
          >
            {t('screens.game.mainMenu')}
          </Button>
        </div>
      </div>
    </div>
  );
};
