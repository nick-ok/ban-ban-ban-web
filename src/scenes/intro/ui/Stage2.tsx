import { useTranslation } from '@/features/i18n';
import { Button } from '@/shared/ui';

import type { StageProps } from '../model/types';

import styles from './Stage2.module.css';

export const Stage2 = ({ onPrev, onNext }: StageProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h3>{t('screens.intro.stage2.title')}</h3>

      <p>{t('screens.intro.stage2.faced')}</p>
      <p>{t('screens.intro.stage2.hate')}</p>
      <p>{t('screens.intro.stage2.deception')}</p>
      <p>{t('screens.intro.stage2.toxicity')}</p>
      <p>{t('screens.intro.stage2.ignorance')}</p>

      <h3>{t('screens.intro.stage2.feelSafe')}</h3>

      <Button onClick={onPrev}>Prev</Button>

      <Button onClick={onNext}>Next</Button>
    </div>
  );
};
