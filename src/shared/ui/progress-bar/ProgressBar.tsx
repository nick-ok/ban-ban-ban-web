import { useEffect, useRef } from 'react';

import { motion, useInView, useSpring, useTransform } from 'motion/react';

import styles from './ProgressBar.module.css';

interface Props {
  value: number;
  displayValue?: string;
  size?: 'sm' | 'md';
  trackColor?: string;
  fillColor?: string;
}

const AnimatedPercent = ({
  spring,
}: {
  spring: ReturnType<typeof useSpring>;
}) => {
  const rounded = useTransform(spring, (v) => Math.round(v));
  return <motion.span>{rounded}</motion.span>;
};

export const ProgressBar = ({
  value,
  displayValue,
  size = 'sm',
  trackColor = 'rgba(255, 255, 255, 0.08)',
  fillColor = '#00ff88',
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const springValue = useSpring(0, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  return (
    <div ref={ref} className={styles.wrapper} data-size={size}>
      <div className={styles.track} style={{ backgroundColor: trackColor }}>
        <motion.div
          className={styles.fill}
          style={{
            backgroundColor: fillColor,
            width: useTransform(springValue, (v) => `${v}%`),
          }}
        />
        <span className={styles.text}>
          {displayValue ?? (
            <>
              <AnimatedPercent spring={springValue} />%
            </>
          )}
        </span>
      </div>
    </div>
  );
};
