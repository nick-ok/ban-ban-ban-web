import { useEffect, useRef, useState } from 'react';

import { motion, useAnimate } from 'motion/react';

import { initGame } from '@/app/model/init-game';
import { useNavigationStore } from '@/entities/navigation';
import { AudioService } from '@/features/audio';
import { Button } from '@/shared/ui';

import { LoadingDots } from './LoadingDots';

import styles from './BootstrapScene.module.css';

const VERSION = import.meta.env.VITE_APP_VERSION;

export const BootstrapScene = () => {
  const isMounted = useRef(true);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimationDone, setAnimationDone] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const setScene = useNavigationStore((state) => state.setScene);
  const [scope, animate] = useAnimate();

  const springTransition = {
    type: 'spring' as const,
    stiffness: 500,
    damping: 15,
    mass: 0.6,
  };

  const handleStart = async () => {
    await AudioService.unlock();
    setScene('lock');
  };

  useEffect(() => {
    isMounted.current = true;

    initGame({
      onSuccess: () => {
        if (isMounted.current) {
          setIsLoaded(true);
        }
      },
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const playStamps = async () => {
      await animate(
        scope.current,
        { scale: 4, rotate: 15, opacity: 0 },
        { duration: 0 },
      );

      // 1. Первый удар
      await animate(
        scope.current,
        { scale: 2.3, rotate: 55, opacity: 1 },
        { ...springTransition, opacity: { duration: 0.1, ease: 'linear' } },
      );
      await new Promise((resolve) => setTimeout(resolve, 100));

      // 2. Второй удар
      await animate(
        scope.current,
        { scale: 1.7, rotate: -15 },
        springTransition,
      );
      await new Promise((resolve) => setTimeout(resolve, 50));

      // 3. Третий финальный удар (в 1)
      await animate(scope.current, { scale: 1, rotate: 0 }, springTransition);
      // Финальная задержка, чтобы рассмотреть логотип перед выходом
      await new Promise((resolve) => setTimeout(resolve, 150));

      // Проверка статуса загрузки
      if (!isMounted.current) {
        return;
      }

      if (isLoaded) {
        setAnimationDone(true);
      } else {
        setAnimationKey((prev) => prev + 1);
      }
    };

    playStamps();
  }, [animationKey, isLoaded]);

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img
          ref={scope}
          src="/images/ban-stamp.png"
          className={styles.imageLogo}
          alt="BanBanBan logo"
        />

        {isAnimationDone && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className={styles.startBtnWrap}
          >
            <Button
              variant="success"
              className={styles.startBtn}
              onClick={handleStart}
              withSound={false}
            >
              Start
            </Button>
          </motion.div>
        )}
      </div>

      <div className={styles.loadingDots}>
        <LoadingDots isLoading={isAnimationDone} />

        <div className={styles.appInfo}>
          <span>{VERSION}</span>
          <span>&copy; hoxma games</span>
        </div>
      </div>
    </div>
  );
};
