import { useNavigationStore } from '@/entities/navigation';
import { useTranslation } from '@/features/i18n';
import { Button, ZoomMotion } from '@/shared/ui';

import styles from './NoInstructions.module.css';

export const NoInstructions = () => {
  const { t } = useTranslation();
  const { setScene } = useNavigationStore();

  return (
    <ZoomMotion className={styles.root}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{t('scenarios.noInstructions')}</h3>

        <Button
          onClick={() => setScene('lobby')}
          className={styles.button}
          variant={'white'}
        >
          {t('scenarios.cancel')}
        </Button>
      </div>
    </ZoomMotion>
  );
};
