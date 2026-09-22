import { useTranslation } from '@/features/i18n';
import { Button } from '@/shared/ui';

import type { StageProps } from '../model/types';

import styles from './Stage1.module.css';

export const Stage1 = ({ onNext }: StageProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h4>{t('screens.gameend.stage1.title')}</h4>

      <p>{t('screens.gameend.stage1.thankyou')}</p>

      <Button onClick={onNext}>NEXT</Button>
    </div>
  );
};
