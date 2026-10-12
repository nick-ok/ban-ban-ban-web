import * as PIXI from 'pixi.js';

import {
  destroyGameMessage,
  type ExtendedPixiMessageContainer,
} from '@/entities/message';

import type { StatKeyType } from '../model/types';
import type { ScreenGlitch } from './screen-glitch';

const MARGIN = 20;

interface UpdateMessageMotionContext {
  stage: PIXI.Container;
  deltaMS: number;
  incrementStat: (key: StatKeyType) => void;
  screenGlitch: ScreenGlitch | null;
}

export const updateMessageMotion = (
  child: ExtendedPixiMessageContainer,
  ctx: UpdateMessageMotionContext,
): void => {
  const { stage, deltaMS, incrementStat, screenGlitch } = ctx;

  const speed = child.messageData?.speed ?? 0.5;
  const moveAmount = speed * (deltaMS / 1000) * 100;
  child.y -= moveAmount;

  const bounds = child.getBounds();
  if (bounds.y + bounds.height < -MARGIN) {
    const banAction = child.messageData?.banAction;

    let shouldGlitch = false;

    if (banAction === 'ban') {
      incrementStat('missed');
      shouldGlitch = true;
    } else if (banAction === 'longBan') {
      incrementStat('missedLong');
      shouldGlitch = true;
    }

    if (shouldGlitch && screenGlitch) {
      screenGlitch.start({
        duration: 350,
      });
    }

    destroyGameMessage({
      stage,
      container: child,
    });
  }
};
