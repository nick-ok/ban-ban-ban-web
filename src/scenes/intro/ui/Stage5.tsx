import { useTranslation } from '@/features/i18n';
import { Button } from '@/shared/ui';

import type { StageProps } from '../model/types';

import styles from './Stage5.module.css';

export const Stage5 = ({ onPrev, onFinish }: StageProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h3>{t('screens.intro.stage5.title')}</h3>

      <p>{t('screens.intro.stage5.partOfHistory')}</p>
      <p>{t('screens.intro.stage5.changeWorld')}</p>
      <p>{t('screens.intro.stage5.welcome')}</p>

      <Button onClick={onPrev}>Prev</Button>

      <Button onClick={onFinish}>Finish</Button>
    </div>
  );
};
