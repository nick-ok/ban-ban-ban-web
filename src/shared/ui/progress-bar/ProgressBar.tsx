import { useEffect, useRef } from 'react';

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'motion/react';

import styles from './ProgressBar.module.css';

interface Props {
  value: number;
  duration?: number;
  displayValue?: string;
  size?: 'sm' | 'md' | 'lg';
  trackColor?: string;
  fillColor?: string;
}

const AnimatedPercent = ({
  motionValue,
}: {
  motionValue: ReturnType<typeof useMotionValue<number>>;
}) => {
  const rounded = useTransform(motionValue, (v) => Math.floor(v));

  return <motion.span>{rounded}</motion.span>;
};

export const ProgressBar = ({
  value,
  duration = 0.8,
  displayValue,
  size = 'sm',
  trackColor = 'rgba(0, 0, 0, 0.2)',
  fillColor = 'var(--color-success)',
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const progressValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(progressValue, value, {
        duration,
        ease: 'easeInOut',
      });

      return controls.stop;
    }
  }, [isInView, value, progressValue]);

  return (
    <div ref={ref} className={styles.wrapper} data-size={size}>
      <div className={styles.track} style={{ backgroundColor: trackColor }}>
        <motion.div
          className={styles.fill}
          style={{
            backgroundColor: fillColor,
            width: useTransform(progressValue, (v) => `${v}%`),
          }}
        />
        <span className={styles.text}>
          {displayValue ?? (
            <>
              <AnimatedPercent motionValue={progressValue} />%
            </>
          )}
        </span>
      </div>
    </div>
  );
};
