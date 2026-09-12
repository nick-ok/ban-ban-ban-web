import type { ReactNode } from 'react';

import { motion, type HTMLMotionProps } from 'motion/react';

interface Props extends HTMLMotionProps<'div'> {
  scale?: number;
  duration?: number;
  className?: string;
  children: ReactNode;
}

export const ZoomMotion = ({
  scale = 1.3,
  duration = 0.3,
  className,
  children,
  ...props
}: Props) => {
  return (
    <motion.div
      className={className}
      initial={{ scale, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
