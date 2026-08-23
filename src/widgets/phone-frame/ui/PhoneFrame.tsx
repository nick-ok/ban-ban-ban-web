import type { PropsWithChildren } from 'react';

import styles from './styles.module.css';

export const PhoneFrame = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.frame}>
      <div className={styles.notch} />
      <div className={styles.screen}>{children}</div>
    </div>
  );
};
