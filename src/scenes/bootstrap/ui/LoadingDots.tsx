import clsx from 'clsx';

import styles from './LoadingDots.module.css';

interface Props {
  isLoading: boolean;
  className?: string;
}

export const LoadingDots = ({ isLoading = true, className }: Props) => {
  return (
    <div
      className={clsx(styles.root, className)}
      style={{ opacity: isLoading ? 0 : 1 }}
    >
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
};
