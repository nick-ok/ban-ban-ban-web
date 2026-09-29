import {
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactElement,
} from 'react';

import styles from './ShineFX.module.css';

interface Props {
  children: ReactElement<{ className?: string; style?: CSSProperties }>;
  color?: string;
  enabled?: boolean;
}

export const ShineFX = ({ children, color, enabled = true }: Props) => {
  if (!isValidElement(children)) {
    return children;
  }

  const className = [children.props.className, enabled && styles.shine]
    .filter(Boolean)
    .join(' ');

  const style: CSSProperties = {
    ...children.props.style,
    ...(enabled && color && { ['--shine-color' as string]: color }),
  };

  return cloneElement(children, { className, style });
};
