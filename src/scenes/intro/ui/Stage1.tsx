import { useTranslation } from '@/features/i18n';
import { Button } from '@/shared/ui';

import type { StageProps } from '../model/types';

import styles from './Stage1.module.css';

export const Stage1 = ({ onNext }: StageProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h3>{t('screens.intro.stage1.title', { count: 7.35 })}</h3>

      <p>{t('screens.intro.stage1.learning')}</p>
      <p>{t('screens.intro.stage1.sharing')}</p>
      <p>{t('screens.intro.stage1.creating')}</p>
      <p>{t('screens.intro.stage1.connecting')}</p>

      <Button onClick={onNext}>Next</Button>
    </div>
  );
};
