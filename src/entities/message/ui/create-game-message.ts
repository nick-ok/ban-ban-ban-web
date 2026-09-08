import * as PIXI from 'pixi.js';

import { BUBBLE_CONFIG } from '../model/constants';
import type { ExtendedPixiMessageContainer, Message } from '../model/types';
import { createMessageBubble } from './create-message-bubble';

export const createGameMessage = (
  message: Message,
): ExtendedPixiMessageContainer => {
  const container = new PIXI.Container() as ExtendedPixiMessageContainer;

  const { content, side = 'left' } = message;

  const pixiText = new PIXI.Text({
    text: content?.text,
    style: {
      fontSize: BUBBLE_CONFIG.fontSize,
      fill: BUBBLE_CONFIG.colors.text,
      wordWrap: true,
      wordWrapWidth: BUBBLE_CONFIG.maxWidth - BUBBLE_CONFIG.padding * 2,
      breakWords: true,
    },
  });

  const bubbleWidth = Math.min(
    Math.max(
      pixiText.width + BUBBLE_CONFIG.padding * 2,
      BUBBLE_CONFIG.minWidth,
    ),
    BUBBLE_CONFIG.maxWidth,
  );
  const bubbleHeight = Math.max(
    pixiText.height + BUBBLE_CONFIG.padding * 2,
    40,
  );

  const bubble = createMessageBubble({
    width: bubbleWidth,
    height: bubbleHeight,
    side,
    color: BUBBLE_CONFIG.colors.background,
  });

  const darkBubble = createMessageBubble({
    width: bubbleWidth,
    height: bubbleHeight,
    side,
    color: 0x000000,
  });
  darkBubble.alpha = 0.07;

  const messageHeight = bubbleHeight + BUBBLE_CONFIG.tail.height;

  const progressMask = new PIXI.Graphics();
  progressMask.rect(0, 0, bubbleWidth, messageHeight).fill(0xffffff);
  progressMask.y = messageHeight;
  darkBubble.mask = progressMask;

  container.eventMode = 'static';
  container.cursor = 'pointer';

  container.messageData = message;
  container.isPressed = false;

  container.holdTime = 0;
  container.targetTime = message.banAction === 'longBan' ? 1000 : 500;
  container.messageHeight = messageHeight;

  container.updateProgress = (percent: number) => {
    const clampedPercent = Math.min(1, Math.max(0, percent));

    if (clampedPercent <= 0) {
      progressMask.y = messageHeight;

      return;
    }

    const targetY = messageHeight - messageHeight * clampedPercent;

    progressMask.y = targetY;
  };

  container.addChild(bubble);
  container.addChild(darkBubble);
  container.addChild(progressMask);

  container.addChild(pixiText);
  pixiText.position.set(BUBBLE_CONFIG.padding, BUBBLE_CONFIG.padding);

  return container;
};
