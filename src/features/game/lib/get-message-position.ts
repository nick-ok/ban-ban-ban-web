import * as PIXI from 'pixi.js';

import type { ExtendedPixiMessageContainer } from '@/entities/message';

interface MessagePosition {
  x: number;
  y: number;
}

export const getMessagePosition = (
  container: ExtendedPixiMessageContainer,
  app: PIXI.Application,
  side: 'left' | 'right',
): MessagePosition => {
  const stageWidth = app.renderer.width;
  const stageHeight = app.renderer.height;

  const containerWidth = container.getBounds().width || 200;
  const containerHeight = container.getBounds().height || 200;

  return {
    x: side === 'left' ? 0 : stageWidth - containerWidth,
    y: stageHeight - containerHeight,
  };
};
