import * as PIXI from 'pixi.js';

import { randomArrayItem } from '@/shared/lib';

import { MESSAGE_CONFIG } from '../config/message-config';
import type { ExtendedPixiMessageContainer, Message } from '../model/types';
import {
  AD_BUTTON_HEIGHT,
  drawMessageADButton,
} from './draw-message-ad-button';
import { drawMessageBubble } from './draw-message-bubble';
import { drawMessageFooter } from './draw-message-footer';
import { drawMessageHead } from './draw-message-head';

export const createGameMessage = (
  message: Message,
  isAutomoderation = false,
): ExtendedPixiMessageContainer => {
  const adTextColors = [0x1f90f0, 0x22c55e, 0xef4444];
  const container = new PIXI.Container() as ExtendedPixiMessageContainer;

  const { content, side = 'left', avatarKey, title } = message;
  const { bubble, tail, colors } = MESSAGE_CONFIG;
  const GAP = 12;

  const headContainer = drawMessageHead({ avatarKey, titleKey: title });
  headContainer.position.set(bubble.padding, bubble.padding);

  const textStartY = bubble.padding + bubble.headSize + GAP;
  const wordWrapWidth = bubble.width - bubble.padding * 2;

  let currentBottomY = textStartY;
  let pixiText: PIXI.Text | null = null;
  let audioSprite: PIXI.Sprite | null = null;

  if (content.type === 'audio') {
    audioSprite = new PIXI.Sprite(PIXI.Assets.get('voiceMessage'));

    audioSprite.width = wordWrapWidth;
    audioSprite.scale.y = audioSprite.scale.x;

    audioSprite.position.set(bubble.padding, textStartY);
    currentBottomY = textStartY + audioSprite.height;
  } else {
    pixiText = new PIXI.Text({
      text: content?.text,
      style: {
        fontSize: bubble.fontSize,
        fill:
          content.type === 'ad'
            ? (randomArrayItem(adTextColors) ?? colors.text)
            : colors.text,
        wordWrap: true,
        wordWrapWidth,
        breakWords: true,
      },
    });
    pixiText.position.set(bubble.padding, textStartY);

    if (content.type === 'blurred') {
      const textBlurFilter = new PIXI.BlurFilter();
      textBlurFilter.strength = 6;
      pixiText.filters = [textBlurFilter];
    }

    currentBottomY = textStartY + pixiText.height;
  }

  let adButtonContainer: PIXI.Container | null = null;

  if (content.type === 'ad') {
    adButtonContainer = drawMessageADButton({ width: wordWrapWidth });

    const targetX = bubble.padding + wordWrapWidth / 2;
    const targetY = currentBottomY + GAP + AD_BUTTON_HEIGHT / 2;

    adButtonContainer.position.set(targetX, targetY);
    currentBottomY = currentBottomY + GAP + AD_BUTTON_HEIGHT;
  }

  let footerContainer: PIXI.Container | null = null;
  const hasLikes = content?.hasLikes !== false;

  if (hasLikes) {
    footerContainer = drawMessageFooter({
      likesCount: content?.likes ?? 0,
      likeAssetKey: 'like',
    });

    const footerStartY = currentBottomY + GAP;

    footerContainer.position.set(bubble.padding, footerStartY);
    currentBottomY = footerStartY + footerContainer.height;
  }

  const bubbleHeight = currentBottomY + bubble.padding;
  const totalHeight = bubbleHeight + tail.height;

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

  if (isAutomoderation) {
    container.eventMode = 'none';
  } else {
    container.eventMode = 'static';
    container.cursor = 'pointer';
  }

  container.cursor = 'pointer';
  container.messageData = message;
  container.isPressed = false;
  container.holdTime = 0;
  container.targetTime = message.banAction === 'longBan' ? 1000 : 500;

  container.updateProgress = (percent: number) => {
    const clampedPercent = Math.min(1, Math.max(0, percent));
    progressMask.y = totalHeight - totalHeight * clampedPercent;
  };

  container.addChild(baseBubble);
  container.addChild(progressBubble);
  container.addChild(progressMask);
  container.addChild(headContainer);

  if (pixiText) {
    container.addChild(pixiText);
  }

  if (audioSprite) {
    container.addChild(audioSprite);
  }

  if (adButtonContainer) {
    container.addChild(adButtonContainer);
  }

  if (footerContainer) {
    container.addChild(footerContainer);
  }

  return container;
};
