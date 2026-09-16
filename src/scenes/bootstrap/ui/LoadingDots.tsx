import styles from './LoadingDots.module.css';

export const LoadingDots = () => {
  return (
    <div className={styles.root}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
};
