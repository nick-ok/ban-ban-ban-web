import * as PIXI from 'pixi.js';

import type { ExtendedPixiMessageContainer } from '@/entities/message';

export const spawnBanStamp = (container: ExtendedPixiMessageContainer) => {
  const texture = PIXI.Assets.get('banStamp');
  const sprite = new PIXI.Sprite(texture);

  sprite.anchor.set(0.5);

  const bounds = container.getLocalBounds();
  sprite.position.set(bounds.width / 2, bounds.height / 2);

  const TARGET_ROTATION_RANGE = 0.5;
  const targetRotation = Math.random() * Math.PI * 2;

  const START_ROTATION_OFFSET = -(TARGET_ROTATION_RANGE + 0.2);
  const startRotation = targetRotation + START_ROTATION_OFFSET;

  const START_SCALE = 1.4;
  const END_SCALE = 0.5;

  sprite.rotation = startRotation;
  sprite.scale.set(START_SCALE);
  sprite.alpha = 1;

  container.addChild(sprite);

  return {
    sprite,
    startRotation,
    targetRotation,
    startScale: START_SCALE,
    targetScale: END_SCALE,
  };
};
