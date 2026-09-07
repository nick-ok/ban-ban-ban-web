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

  const textWidth = pixiText.width;
  const textHeight = pixiText.height;

  const bubbleWidth = Math.min(
    Math.max(textWidth + BUBBLE_CONFIG.padding * 2, BUBBLE_CONFIG.minWidth),
    BUBBLE_CONFIG.maxWidth,
  );
  const bubbleHeight = Math.max(textHeight + BUBBLE_CONFIG.padding * 2, 40);

  const bubble = createMessageBubble({
    width: bubbleWidth,
    height: bubbleHeight,
    side,
    color: BUBBLE_CONFIG.colors.background,
  });

  pixiText.position.set(BUBBLE_CONFIG.padding, BUBBLE_CONFIG.padding);

  container.eventMode = 'static';
  container.cursor = 'pointer';

  container.messageData = message;
  container.isPressed = false;

  container.addChild(bubble);
  container.addChild(pixiText);

  return container;
};
