import { useEffect, useRef } from 'react';

import * as PIXI from 'pixi.js';

import { createPixiMessage } from '@/entities/message';

import styles from './PixiStage.module.css';

export const PixiStage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pixiRef = useRef<PIXI.Application | null>(null);

  useEffect(() => {
    let isDestroyed = false;

    const initPixi = async () => {
      if (!containerRef.current) return;

      const appInstance = new PIXI.Application();

      try {
        await appInstance.init({
          resizeTo: containerRef.current,
          backgroundAlpha: 0,
          resolution: Math.min(window.devicePixelRatio || 1, 2),
          autoDensity: true,
          antialias: true,
          roundPixels: true,
          preference: 'webgpu',
        });

        if (isDestroyed) {
          appInstance.destroy(true, { children: true, texture: true });
          return;
        }

        const message = createPixiMessage({
          side: 'left',
          content: {
            type: 'normal',
            text: 'Привет',
            likes: 100,
          },
        });

        pixiRef.current = appInstance;
        containerRef.current.appendChild(appInstance.canvas);

        pixiRef.current.stage.addChild(message);
      } catch (error) {
        console.error('PixiJS Init Error:', error);
      }
    };

    initPixi();

    return () => {
      isDestroyed = true;

      if (pixiRef.current) {
        pixiRef.current.destroy(true, {
          children: true,
          texture: true,
        });
        pixiRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className={styles.container} />;
};
