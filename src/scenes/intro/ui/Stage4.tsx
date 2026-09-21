import { useTranslation } from '@/features/i18n';
import { Button } from '@/shared/ui';

import type { StageProps } from '../model/types';

import styles from './Stage4.module.css';

export const Stage4 = ({ onPrev, onNext }: StageProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h3>{t('screens.intro.stage4.title')}</h3>

      <p>{t('screens.intro.stage4.knowledge')}</p>
      <p>{t('screens.intro.stage4.love')}</p>
      <p>{t('screens.intro.stage4.truth')}</p>

      <h3>{t('screens.intro.stage4.availableToEveryone')}</h3>

      <Button onClick={onPrev}>Prev</Button>

      <Button onClick={onNext}>Next</Button>
    </div>
  );
};
