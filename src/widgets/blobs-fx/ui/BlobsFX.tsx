import styles from './BlobsFX.module.css';

export const BlobsFX = () => {
  return (
    <div>
      <div className={styles.blobs} />
      <div className={styles.vignette} />
    </div>
  );
};
