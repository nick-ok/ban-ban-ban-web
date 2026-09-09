import * as PIXI from 'pixi.js';

import type { AvatarAssetKey, TitleAssetKey } from '../config/assets';
import { BUBBLE_CONFIG } from '../model/constants';

interface Props {
  avatarKey: AvatarAssetKey;
  titleKey: TitleAssetKey;
}

export const drawMessageHead = ({
  avatarKey,
  titleKey,
}: Props): PIXI.Container => {
  const container = new PIXI.Container();

  const { bubble } = BUBBLE_CONFIG;

  const AVATAR_SIZE = bubble.headSize;
  const TITLE_SIZE = 20;
  const radius = AVATAR_SIZE / 2;

  const avatarTexture = PIXI.Assets.get(avatarKey);

  if (avatarTexture) {
    const sprite = new PIXI.Sprite(avatarTexture);
    sprite.width = AVATAR_SIZE;
    sprite.height = AVATAR_SIZE;

    const maskCircle = new PIXI.Graphics();
    maskCircle.circle(radius, radius, radius).fill(0xffffff);

    sprite.mask = maskCircle;

    const border = new PIXI.Graphics();
    border.circle(radius, radius, radius).stroke({ color: 0xdddddd, width: 1 });

    container.addChild(sprite);
    container.addChild(maskCircle);
    container.addChild(border);
  }

  if (titleKey !== 'empty') {
    const titleTexture = PIXI.Assets.get(titleKey);

    if (titleTexture) {
      const sprite = new PIXI.Sprite(titleTexture);

      sprite.width = TITLE_SIZE;
      sprite.height = TITLE_SIZE;

      const titleX = bubble.width - bubble.padding * 2 - sprite.width;
      const titleY = (AVATAR_SIZE - sprite.height) / 2;

      sprite.position.set(titleX, titleY);

      container.addChild(sprite);
    }
  }

  return container;
};
