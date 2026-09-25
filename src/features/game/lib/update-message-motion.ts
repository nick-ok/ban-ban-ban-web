import * as PIXI from 'pixi.js';

import {
  destroyGameMessage,
  type ExtendedPixiMessageContainer,
} from '@/entities/message';

import type { StatKeyType } from '../model/types';

const MARGIN = 20;

interface UpdateMessageMotionContext {
  stage: PIXI.Container;
  deltaMS: number;
  incrementStat: (key: StatKeyType) => void;
}

export const updateMessageMotion = (
  child: ExtendedPixiMessageContainer,
  ctx: UpdateMessageMotionContext,
): void => {
  const { stage, deltaMS, incrementStat } = ctx;

  const speed = child.messageData?.speed ?? 0.5;
  const moveAmount = speed * (deltaMS / 1000) * 100;
  child.y -= moveAmount;

  const bounds = child.getBounds();
  if (bounds.y + bounds.height < -MARGIN) {
    const banAction = child.messageData?.banAction;

    if (banAction === 'ban') {
      incrementStat('missed');
    } else if (banAction === 'longBan') {
      incrementStat('missedLong');
    }

    destroyGameMessage({
      stage,
      container: child,
    });
  }
};
