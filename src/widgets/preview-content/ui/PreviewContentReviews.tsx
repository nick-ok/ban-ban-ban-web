import { type Review } from '@/entities/review';

import styles from './PreviewContentReviews.module.css';

interface Props {
  reviews: Review[];
}

export const PreviewContentReviews = ({ reviews }: Props) => {
  return (
    <div className={styles.root}>
      <pre>{JSON.stringify(reviews, null, 2)}</pre>
    </div>
  );
};
