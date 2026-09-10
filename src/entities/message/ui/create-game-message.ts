import * as PIXI from 'pixi.js';

import { MESSAGE_CONFIG } from '../config/message-config';
import type { ExtendedPixiMessageContainer, Message } from '../model/types';
import { drawMessageBubble } from './draw-message-bubble';
import { drawMessageFooter } from './draw-message-footer';
import { drawMessageHead } from './draw-message-head';

export const createGameMessage = (
  message: Message,
): ExtendedPixiMessageContainer => {
  const container = new PIXI.Container() as ExtendedPixiMessageContainer;

  const { content, side = 'left', avatarKey, title } = message;
  const { bubble, tail, colors } = MESSAGE_CONFIG;
  const GAP = 12;

  const headContainer = drawMessageHead({ avatarKey, titleKey: title });
  headContainer.position.set(bubble.padding, bubble.padding);

  const textStartY = bubble.padding + bubble.headSize + GAP;
  const maxTextWidth = bubble.width - bubble.padding * 2;

  const pixiText = new PIXI.Text({
    text: content?.text,
    style: {
      fontSize: bubble.fontSize,
      fill: colors.text,
      wordWrap: true,
      wordWrapWidth: maxTextWidth,
      breakWords: true,
    },
  });
  pixiText.position.set(bubble.padding, textStartY);

  const footerContainer = drawMessageFooter({
    likesCount: content?.likes ?? 0,
    likeAssetKey: 'like',
  });
  const footerStartY = textStartY + pixiText.height + GAP;
  footerContainer.position.set(bubble.padding, footerStartY);

  const bubbleHeight = footerStartY + bubble.footerSize + bubble.padding;
  const totalHeight = bubbleHeight + tail.height;

  const shadowBubble = drawMessageBubble({
    width: bubble.width,
    height: bubbleHeight,
    side,
    color: 0x000000,
  });
  shadowBubble.alpha = 0.15;
  shadowBubble.position.set(2, 2);

  const blurFilter = new PIXI.BlurFilter();
  blurFilter.strength = 4;
  shadowBubble.filters = [blurFilter];

  const baseBubble = drawMessageBubble({
    width: bubble.width,
    height: bubbleHeight,
    side,
    color: colors.background,
  });

  const progressBubble = drawMessageBubble({
    width: bubble.width,
    height: bubbleHeight,
    side,
    color: 0x000000,
  });
  progressBubble.alpha = 0.07;

  const progressMask = new PIXI.Graphics();
  progressMask.rect(0, 0, bubble.width, totalHeight).fill(0xffffff);
  progressMask.y = totalHeight;
  progressBubble.mask = progressMask;

  container.eventMode = 'static';
  container.cursor = 'pointer';
  container.messageData = message;
  container.isPressed = false;
  container.holdTime = 0;
  container.targetTime = message.banAction === 'longBan' ? 1000 : 500;

  container.updateProgress = (percent: number) => {
    const clampedPercent = Math.min(1, Math.max(0, percent));

    progressMask.y = totalHeight - totalHeight * clampedPercent;
  };

  container.addChild(shadowBubble);
  container.addChild(baseBubble);
  container.addChild(progressBubble);
  container.addChild(progressMask);
  container.addChild(headContainer);
  container.addChild(pixiText);
  container.addChild(footerContainer);

  container.on('destroyed', () => {
    if (shadowBubble.filters) {
      shadowBubble.filters = null;
    }
    blurFilter.destroy();
  });

  return container;
};
