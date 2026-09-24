import * as PIXI from 'pixi.js';

import { type ExtendedPixiMessageContainer } from '@/entities/message';

import type { ReactionType, StatKeyType } from '../model/types';

interface UpdateMessageHoldContext {
  stage: PIXI.Container;
  elapsedMS: number;
  incrementStat: (key: StatKeyType) => void;
  triggerReaction: (key: ReactionType) => void;
}

export const updateMessageHold = (
  child: ExtendedPixiMessageContainer,
  ctx: UpdateMessageHoldContext,
): void => {
  const { elapsedMS, incrementStat, triggerReaction } = ctx;

  const targetTime = child.targetTime || 500;

  if (child.isPressed) {
    child.holdTime += elapsedMS;

    if (child.holdTime >= targetTime) {
      const banAction = child.messageData?.banAction;

      if (banAction === 'ban') {
        incrementStat('banned');
        triggerReaction('banned');
        child.dyingEffect = { particles: 'positive', shake: 0 };
      } else if (banAction === 'longBan') {
        incrementStat('longBanned');
        triggerReaction('longBanned');
        child.dyingEffect = { particles: 'positive', shake: 20 };
      } else {
        incrementStat('wrongBanned');
        triggerReaction('wrongBanned');
        child.dyingEffect = { particles: 'negative', shake: 100 };
      }

      child.isDying = true;

      return;
    }
  } else if (child.holdTime > 0) {
    child.holdTime -= elapsedMS * 2;

    if (child.holdTime < 0) {
      child.holdTime = 0;
    }
  }

  const percent = child.holdTime / targetTime;
  child.updateProgress(percent);
};
