import type { ButtonHTMLAttributes, PointerEvent, ReactNode } from 'react';

import clsx from 'clsx';

import { AudioService } from '@/shared/lib';

import styles from './Button.module.css';

type ButtonVariant =
  'primary' | 'success' | 'warn' | 'danger' | 'white' | 'text';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  withSound?: boolean;
  bordered?: boolean;
  className?: string;
}

export const Button = ({
  children,
  className,
  variant = 'text',
  withSound = true,
  bordered = false,
  type = 'button',
  onPointerDown,
  ...defaultProps
}: Props) => {
  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    { [styles.bordered]: bordered },
    className,
  );

  const handlePointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    if (defaultProps.disabled) {
      return;
    }

    if (withSound) {
      AudioService.play({ key: 'click' });
    }

    onPointerDown?.(e);
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      onPointerDown={handlePointerDown}
      {...defaultProps}
    >
      {children}
    </button>
  );
};
