import type { ButtonHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonVariant =
  'primary' | 'success' | 'warn' | 'danger' | 'white' | 'text';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export const Button = ({
  children,
  className,
  variant = 'text',
  type = 'button',
  ...defaultProps
}: Props) => {
  const buttonClasses = clsx(styles.button, styles[variant], className);

  return (
    <button type={type} className={buttonClasses} {...defaultProps}>
      {children}
    </button>
  );
};
