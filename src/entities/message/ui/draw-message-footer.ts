import * as PIXI from 'pixi.js';

import { i18n } from '@/features/i18n';
import { numberFormat } from '@/shared/lib';

import type { UIAssetKey } from '../config/assets';
import { MESSAGE_CONFIG } from '../config/message-config';

interface Props {
  bubbleWidth: number;
  likesCount: number;
  likeAssetKey: UIAssetKey;
  reportsAssetKey: UIAssetKey;
  reportsCount: number;
  showLikes?: boolean;
  showReports?: boolean;
}

export const drawMessageFooter = ({
  bubbleWidth,
  likesCount,
  likeAssetKey,
  reportsAssetKey,
  reportsCount,
  showLikes = false,
  showReports = false,
}: Props) => {
  const container = new PIXI.Container();
  const { bubble } = MESSAGE_CONFIG;

  const GAP = 6;
  const iconSize = bubble.footerSize;
  const likeTexture = PIXI.Assets.get(likeAssetKey);

  if (likeTexture && showLikes) {
    const heartSprite = new PIXI.Sprite(likeTexture);

    heartSprite.width = iconSize;
    heartSprite.height = iconSize;
    heartSprite.position.set(0, 0);

    container.addChild(heartSprite);

    const countText = new PIXI.Text({
      text: numberFormat(likesCount, i18n.language),
      style: {
        fontSize: bubble.fontSize,
        fill: 0x6b5246,
      },
    });

    countText.position.set(
      bubble.footerSize + GAP,
      (bubble.footerSize - countText.height) / 2,
    );
    container.addChild(countText);
  }

  const reportsCountText = new PIXI.Text({
    text: numberFormat(reportsCount, i18n.language),
    style: {
      fontSize: bubble.fontSize,
      fill: 0x6b5246,
    },
  });

  const reportsGroupWidth = iconSize + GAP + reportsCountText.width;

  const reporstsStartX = bubbleWidth - reportsGroupWidth;
  const reporstsTexture = PIXI.Assets.get(reportsAssetKey);

  if (reporstsTexture && showReports) {
    const warningSprite = new PIXI.Sprite(reporstsTexture);

    warningSprite.width = iconSize;
    warningSprite.height = iconSize;
    warningSprite.position.set(reporstsStartX, 0);

    container.addChild(warningSprite);

    reportsCountText.position.set(
      reporstsStartX + bubble.footerSize + GAP,
      (bubble.footerSize - reportsCountText.height) / 2,
    );
    container.addChild(reportsCountText);
  }

  return container;
};
