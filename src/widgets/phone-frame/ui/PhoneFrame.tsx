import type { PropsWithChildren } from 'react';

import clsx from 'clsx';

import '@/app/styles/tokens.css';

import styles from './styles.module.css';

export const PhoneFrame = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.frame}>
      <div className={styles.notch} />
      <div className={clsx(styles.screen, 'tokens')}>{children}</div>
    </div>
  );
};
