import { useNavigationStore } from '@/entities/navigation';
import { useTranslation } from '@/features/i18n';
import { Button, ZoomOutMotion } from '@/shared/ui';

import styles from './NoInstructions.module.css';

export const NoInstructions = () => {
  const { t } = useTranslation();
  const { setScene } = useNavigationStore();

  return (
    <ZoomOutMotion className={styles.root}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{t('scenarios.noInstructions')}</h3>

        <Button onClick={() => setScene('lobby')} className={styles.button}>
          {t('scenarios.cancel')}
        </Button>
      </div>
    </ZoomOutMotion>
  );
};
