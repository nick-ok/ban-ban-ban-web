import * as PIXI from 'pixi.js';

import { i18n } from '@/features/i18n';
import { randomArrayItem } from '@/shared/lib';

import { AD_BUTTON_TXT } from '../config/messages';

export const AD_BUTTON_HEIGHT = 34;

interface DrawAdButtonOptions {
  width: number;
}

export const drawMessageADButton = ({
  width,
}: DrawAdButtonOptions): PIXI.Container => {
  const lang = i18n.language;

  const container = new PIXI.Container();

  const borderRadius = 8;

  const background = new PIXI.Graphics();
  background
    .roundRect(0, 0, width, AD_BUTTON_HEIGHT, borderRadius)
    .fill(0x007aff);

  const buttonText = new PIXI.Text({
    text: randomArrayItem(AD_BUTTON_TXT[lang as 'ru' | 'en']) ?? '',
    style: {
      fontSize: 14,
      fill: 0xffffff,
      fontWeight: 'bold',
    },
  });

  buttonText.position.set(
    (width - buttonText.width) / 2,
    (AD_BUTTON_HEIGHT - buttonText.height) / 2,
  );

  container.addChild(background);
  container.addChild(buttonText);

  container.pivot.set(width / 2, AD_BUTTON_HEIGHT / 2);

  let targetScale = 1.0;
  const ANIMATION_SPEED = 0.2;

  const tickerHandler = (ticker: PIXI.Ticker) => {
    const currentScale = container.scale.x;
    const nextScale =
      currentScale +
      (targetScale - currentScale) * ANIMATION_SPEED * ticker.deltaTime;

    container.scale.set(nextScale);
  };

  PIXI.Ticker.shared.add(tickerHandler);

  container.eventMode = 'static';
  container.cursor = 'pointer';

  container.on('pointerdown', (e: PIXI.FederatedPointerEvent) => {
    e.stopPropagation();
    targetScale = 0.92;
  });

  const handleRelease = (e: PIXI.FederatedPointerEvent) => {
    e.stopPropagation();
    targetScale = 1.0;
  };

  container.on('pointerup', handleRelease);
  container.on('pointerupoutside', handleRelease);

  container.on('destroyed', () => {
    PIXI.Ticker.shared.remove(tickerHandler);
  });

  return container;
};
