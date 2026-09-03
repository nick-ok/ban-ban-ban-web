import * as PIXI from 'pixi.js';

import { BUBBLE_CONFIG } from '../model/constants';
import type { Message } from '../model/types';
import { createBubble } from './Bubble';

export const createPixiMessage = ({
  content,
  side = 'left',
}: Partial<Message>): PIXI.Container => {
  const container = new PIXI.Container();

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

  const bubble = createBubble({
    width: bubbleWidth,
    height: bubbleHeight,
    side,
    color: BUBBLE_CONFIG.colors.background,
  });

  pixiText.position.set(BUBBLE_CONFIG.padding, BUBBLE_CONFIG.padding);

  container.addChild(bubble);
  container.addChild(pixiText);

  return container;
};
