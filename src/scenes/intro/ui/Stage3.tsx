import { useTranslation } from '@/features/i18n';
import { Button } from '@/shared/ui';

import type { StageProps } from '../model/types';

import styles from './Stage3.module.css';

export const Stage3 = ({ onPrev, onNext }: StageProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h3>{t('screens.intro.stage3.title')}</h3>

      <p>{t('screens.intro.stage3.greatestMinds')}</p>
      <p>{t('screens.intro.stage3.solveProblem')}</p>
      <p>{t('screens.intro.stage3.restore')}</p>

      <Button onClick={onPrev}>Prev</Button>

      <Button onClick={onNext}>Next</Button>
    </div>
  );
};
