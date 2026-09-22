import { useTranslation } from '@/features/i18n';
import { Button } from '@/shared/ui';

import type { StageProps } from '../model/types';

import styles from './Stage2.module.css';

export const Stage3 = ({ onPrev, onFinish }: StageProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h4>{t('screens.gameend.stage3.title')}</h4>

      <p>{t('screens.gameend.stage3.newWorld')}</p>
      <p>{t('screens.gameend.stage3.period')}</p>

      <Button onClick={onPrev}>Prev</Button>
      <Button onClick={onFinish}>{t('screens.gameend.stage3.enter')}</Button>
    </div>
  );
};
