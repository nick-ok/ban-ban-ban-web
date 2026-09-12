import { useEffect, useRef } from 'react';

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  type HTMLMotionProps,
} from 'motion/react';

interface Props extends HTMLMotionProps<'span'> {
  from?: number;
  to: number;
  once?: boolean;
  duration?: number;
  className?: string;
  format?: (value: number) => string;
}

export const CountMotion = ({
  from = 0,
  to,
  once = true,
  duration = 1,
  format,
  className,
  ...props
}: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const count = useMotionValue(from);

  const formatted = useTransform(count, (latest) => {
    return format ? format(Math.round(latest)) : String(Math.round(latest));
  });

  useEffect(() => {
    if (!isInView) {
      if (!once) {
        count.set(from);
      }

      return;
    }

    const controls = animate(count, to, {
      duration,
      ease: 'easeOut',
    });

    return () => controls.stop();
  }, [isInView, count, to, duration]);

  return (
    <motion.span ref={ref} className={className} {...props}>
      {formatted}
    </motion.span>
  );
};
