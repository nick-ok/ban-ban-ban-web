import { useEffect } from 'react';

import { motion, useAnimationControls } from 'motion/react';

import styles from './ScanFX.module.css';

export const ScanFX = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    let isMounted = true;

    const runAnimationLoop = async () => {
      while (isMounted) {
        const delay = Math.random() * 2000 + 10000;
        await new Promise((resolve) => setTimeout(resolve, delay));

        if (!isMounted) {
          break;
        }

        await controls.start({
          y: ['100%', '-50%', '100%'],
          transition: {
            duration: 2.2,
            ease: 'linear',
            times: [0, 0.5, 1],
          },
        });
      }
    };

    runAnimationLoop();

    return () => {
      isMounted = false;
    };
  }, [controls]);

  return (
    <motion.div
      className={styles.scanFX}
      animate={controls}
      initial={{ y: '100%' }}
    />
  );
};
