import { useEffect, useRef, useState } from 'react';

import { initDevtools } from '@pixi/devtools';
import * as PIXI from 'pixi.js';

export const usePixiApp = (
  containerRef: React.RefObject<HTMLDivElement | null>,
) => {
  const appRef = useRef<PIXI.Application | null>(null);
  const [app, setApp] = useState<PIXI.Application | null>(null);

  useEffect(() => {
    let isDestroyed = false;

    const initPixi = async () => {
      if (!containerRef.current) {
        return;
      }

      const appInstance = new PIXI.Application();

      try {
        await appInstance.init({
          resizeTo: containerRef.current,
          backgroundAlpha: 0,
          resolution: Math.min(window.devicePixelRatio || 1, 2),
          autoDensity: true,
        });

        appInstance.stage.sortableChildren = true;

        if (import.meta.env.DEV) {
          initDevtools(appInstance);
        }

        if (isDestroyed) {
          appInstance.destroy(true, { children: true, texture: false });

          return;
        }

        containerRef.current.appendChild(appInstance.canvas);

        appRef.current = appInstance;
        setApp(appInstance);
      } catch (error) {
        console.error('PixiJS Init Error:', error);
      }
    };

    initPixi();

    return () => {
      isDestroyed = true;
      if (appRef.current) {
        appRef.current.destroy(true, { children: true, texture: false });
      }
    };
  }, [containerRef]);

  return app;
};
