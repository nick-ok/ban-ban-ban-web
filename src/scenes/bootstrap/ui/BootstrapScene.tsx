import { useEffect } from 'react';

import { loadMessageAssets } from '@/entities/message';
import { useNavigationStore } from '@/entities/navigation';
import { AudioService } from '@/shared/lib';

import styles from './BootstrapScene.module.css';

const MIN_SHOW_TIME = 1000;

export const BootstrapScene = () => {
  const setScene = useNavigationStore((state) => state.setScene);

  useEffect(() => {
    let isMounted = true;

    const initGame = async () => {
      const startTime = performance.now();

      try {
        await Promise.all([loadMessageAssets(), AudioService.initAll()]);
      } catch (error) {
        console.error('Ошибка инициализации ассетов игры:', error);
      }

      const elapsedTime = performance.now() - startTime;

      if (elapsedTime < MIN_SHOW_TIME) {
        await new Promise((resolve) =>
          setTimeout(resolve, MIN_SHOW_TIME - elapsedTime),
        );
      }

      if (isMounted) {
        setScene('lock');
      }
    };

    initGame();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={styles.root}>
      <h3 className={styles.logo}>HOXMA games presents...</h3>
    </div>
  );
};
