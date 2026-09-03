import { useEffect, useRef } from 'react';

import * as PIXI from 'pixi.js';

import styles from './PixiStage.module.css';

const setupGame = (app: PIXI.Application) => {
  const graphics = new PIXI.Graphics();
  graphics.rect(0, 0, 50, 50);
  graphics.fill({ color: 0x00ffcc });

  graphics.x = app.screen.width / 2 - 25;
  graphics.y = app.screen.height / 2 - 25;

  app.stage.addChild(graphics);
};

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
          resolution: window.devicePixelRatio || 1,
          autoDensity: true,
        });

        if (isDestroyed) {
          appInstance.destroy(true, { children: true, texture: true });
          return;
        }

        pixiRef.current = appInstance;
        containerRef.current.appendChild(appInstance.canvas);

        setupGame(appInstance);
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
