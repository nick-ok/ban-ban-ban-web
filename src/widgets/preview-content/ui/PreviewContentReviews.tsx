import { useMemo } from 'react';

import clsx from 'clsx';

import { type Review } from '@/entities/review';
import { i18n, useTranslation } from '@/features/i18n';
import { Icon } from '@/shared/ui';

import styles from './PreviewContentReviews.module.css';

interface Props {
  reviews: Review[];
}

const MAX_STARS = 5;

export const PreviewContentReviews = ({ reviews }: Props) => {
  const { t } = useTranslation();

  const lng = useMemo(() => {
    const lng = i18n.language;

    if (lng !== 'ru') {
      return 'en';
    }

    return lng;
  }, [i18n.language]);

  if (reviews.length === 0) {
    return null;
  }

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{t('screens.preview.reviewsTitle')}</h1>

      <div className={styles.reviewsList}>
        {reviews.map((review) => {
          const text = review.text[lng];
          const usernameChar = review.username.charAt(0).toUpperCase();

          return (
            <div key={review.id}>
              <div className={styles.username}>
                <div className={styles.usernameCircle}>{usernameChar}</div>
                <span>@{review.username}</span>
              </div>

              <div className={styles.stars}>
                {[...Array(MAX_STARS)].map((_, idx) => {
                  const starValue = idx + 1;
                  const isActive = starValue <= review.rating;

                  return (
                    <Icon
                      key={idx}
                      name={'star'}
                      className={clsx(
                        styles.starIcon,
                        isActive && styles.filled,
                      )}
                    />
                  );
                })}
              </div>

              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
