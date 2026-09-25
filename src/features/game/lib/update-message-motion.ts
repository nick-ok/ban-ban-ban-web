import * as PIXI from 'pixi.js';

import {
  destroyGameMessage,
  type ExtendedPixiMessageContainer,
} from '@/entities/message';

import type { ReactionType, StatKeyType } from '../model/types';

const MARGIN = 20;

interface UpdateMessageMotionContext {
  stage: PIXI.Container;
  deltaMS: number;
  incrementStat: (key: StatKeyType) => void;
  triggerReaction: (key: ReactionType) => void;
}

export const updateMessageMotion = (
  child: ExtendedPixiMessageContainer,
  ctx: UpdateMessageMotionContext,
): void => {
  const { stage, deltaMS, incrementStat, triggerReaction } = ctx;

  const speed = child.messageData?.speed ?? 0.5;
  const moveAmount = speed * (deltaMS / 1000) * 100;
  child.y -= moveAmount;

  const bounds = child.getBounds();
  if (bounds.y + bounds.height < -MARGIN) {
    const banAction = child.messageData?.banAction;

    if (banAction === 'ban') {
      incrementStat('missed');
      triggerReaction('missed');
    } else if (banAction === 'longBan') {
      incrementStat('missedLong');
      triggerReaction('missedLong');
    }

    destroyGameMessage({
      stage,
      container: child,
    });
  }
};
