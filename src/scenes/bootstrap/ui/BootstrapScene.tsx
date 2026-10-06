import { useEffect, useRef, useState } from 'react';

import { motion, useAnimate } from 'motion/react';

import { initGame } from '@/app/model/init-game';
import { useNavigationStore } from '@/entities/navigation';
import { AudioService } from '@/features/audio';
import { useTranslation } from '@/features/i18n';
import { Button, ShineFX } from '@/shared/ui';

import { LoadingDots } from './LoadingDots';

import styles from './BootstrapScene.module.css';

const VERSION = import.meta.env.VITE_APP_VERSION;

const ANIMATION_SPEED = 1.4;

export const BootstrapScene = () => {
  const { t } = useTranslation();

  const isMounted = useRef(true);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimationDone, setAnimationDone] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const setScene = useNavigationStore((state) => state.setScene);

  const [scope, animate] = useAnimate();

  const springTransition = {
    type: 'spring' as const,
    stiffness: 500 * ANIMATION_SPEED,
    damping: 15 * Math.sqrt(ANIMATION_SPEED),
    mass: 0.6 / ANIMATION_SPEED,
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
        { ...springTransition, opacity: { duration: 0.05, ease: 'linear' } },
      );

      // 2. Второй удар
      await animate(
        scope.current,
        { scale: 1.7, rotate: -15 },
        springTransition,
      );

      // 3. Третий удар
      await animate(scope.current, { scale: 1, rotate: 0 }, springTransition);

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
      {isAnimationDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={styles.overlay}
        />
      )}

      <div className={styles.logo}>
        <img
          ref={scope}
          src="/images/ban-stamp.png"
          className={styles.imageLogo}
          alt="BanBanBan logo"
          draggable={false}
        />

        {isAnimationDone && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className={styles.startBtnWrap}
          >
            <ShineFX>
              <Button
                variant={'accentBlue'}
                className={styles.joinBtn}
                onClick={handleStart}
                withSound={false}
                glow={true}
              >
                {t('screens.bootstrap.join')}
              </Button>
            </ShineFX>
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
