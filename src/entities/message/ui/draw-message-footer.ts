import * as PIXI from 'pixi.js';

import { i18n } from '@/features/i18n';
import { numberFormat } from '@/shared/lib';

import type { UIAssetKey } from '../config/assets';
import { MESSAGE_CONFIG } from '../config/message-config';

interface Props {
  likesCount: number;
  likeAssetKey: UIAssetKey;
}

export const drawMessageFooter = ({ likesCount, likeAssetKey }: Props) => {
  const container = new PIXI.Container();

  const { bubble } = MESSAGE_CONFIG;

  const GAP = 6;

  const texture = PIXI.Assets.get(likeAssetKey);

  if (texture) {
    const heartSprite = new PIXI.Sprite(texture);

    heartSprite.width = bubble.footerSize;
    heartSprite.height = bubble.footerSize;

    container.addChild(heartSprite);
  } else {
    console.error('[PixiJS] Текстура "like" не найдена в кэше!');
  }

  const countText = new PIXI.Text({
    text: numberFormat(likesCount, i18n.language),
    style: {
      fontSize: bubble.fontSize - 2,
      fill: 0x888888,
    },
  });

  countText.position.set(
    bubble.footerSize + GAP,
    (bubble.footerSize - countText.height) / 2,
  );
  container.addChild(countText);

  return container;
};
