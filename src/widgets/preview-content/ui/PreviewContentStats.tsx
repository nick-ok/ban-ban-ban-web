import { i18n, useTranslation } from '@/features/i18n';
import { numberFormat } from '@/shared/lib';
import { CountMotion, Icon, ShineFX } from '@/shared/ui';

import styles from './PreviewContentStats.module.css';

interface Props {
  rating: number;
  downloads: number;
  reviews: number;
}

export const PreviewContentStats = ({ rating, downloads, reviews }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <ShineFX>
        <div className={styles.statItem}>
          <div className={styles.rating}>
            <Icon name={'star'} className={styles.starIcon} />
            <span>{rating}</span>
          </div>
        </div>
      </ShineFX>

      <ShineFX>
        <div className={styles.statItem}>
          <div className={styles.stat}>
            <CountMotion
              to={reviews}
              duration={0.6}
              format={(v) => numberFormat(v, i18n.language)}
              className={styles.value}
            />
            <span className={styles.title}>{t('screens.preview.reviews')}</span>
          </div>
        </div>
      </ShineFX>

      <ShineFX>
        <div className={styles.statItem}>
          <div className={styles.stat}>
            <CountMotion
              to={downloads}
              duration={0.6}
              format={(v) => numberFormat(v, i18n.language)}
              className={styles.value}
            />
            <span className={styles.title}>
              {t('screens.preview.downloads')}
            </span>
          </div>
        </div>
      </ShineFX>
    </div>
  );
};
