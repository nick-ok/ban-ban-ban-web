import type { ReactNode } from 'react';

import { motion, type HTMLMotionProps } from 'motion/react';

interface Props extends HTMLMotionProps<'div'> {
  className?: string;
  children: ReactNode;
}

export const ZoomOutMotion = ({ className, children, ...props }: Props) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 1.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
