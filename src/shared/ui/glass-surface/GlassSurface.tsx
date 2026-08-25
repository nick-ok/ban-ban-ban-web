import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react';

import clsx from 'clsx';

import styles from './GlassSurface.module.css';

type Props<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'disabled'>;

export const GlassSurface = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: Props<T>) => {
  const Component = as || 'div';

  return (
    <Component className={clsx(styles.surface, className)} {...props}>
      {children}
    </Component>
  );
};
