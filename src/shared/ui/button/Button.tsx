import type { ButtonHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button = ({
  children,
  className,
  type = 'button',
  ...defaultProps
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, className)}
      {...defaultProps}
    >
      {children}
    </button>
  );
};
