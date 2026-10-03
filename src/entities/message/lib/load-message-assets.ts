import * as PIXI from 'pixi.js';

import shantellFontUrl from '@/shared/assets/fonts/ShantellSans-VariableFont.ttf';

import {
  AVATAR_ASSETS,
  TITLE_ASSETS,
  UI_ASSETS,
  type AvatarAssetKey,
  type TitleAssetKey,
  type UIAssetKey,
} from '../config/assets';

type AssetRecord = Record<string, string>;

export const loadMessageAssets = async (): Promise<void> => {
  const avatarKeys = Object.keys(AVATAR_ASSETS) as AvatarAssetKey[];
  const titleKeys = Object.keys(TITLE_ASSETS).filter(
    (key) => key !== 'empty',
  ) as TitleAssetKey[];
  const uiKeys = Object.keys(UI_ASSETS) as UIAssetKey[];

  const assetGroups: Array<{ keys: string[]; source: AssetRecord }> = [
    { keys: avatarKeys, source: AVATAR_ASSETS },
    { keys: titleKeys, source: TITLE_ASSETS },
    { keys: uiKeys, source: UI_ASSETS },
  ];

  assetGroups.forEach(({ keys, source }) => {
    keys.forEach((key) => {
      if (!PIXI.Assets.resolver.hasKey(key)) {
        PIXI.Assets.add({ alias: key, src: source[key] });
      }
    });
  });

  const FONT_KEY = 'Shantell Sans';

  if (!PIXI.Assets.resolver.hasKey(FONT_KEY)) {
    PIXI.Assets.add({
      alias: FONT_KEY,
      src: shantellFontUrl,
      data: {
        family: 'Shantell Sans',
        weights: ['300', '400', '600', '700', '900'],
      },
    });
  }

  const allKeys = [...avatarKeys, ...titleKeys, ...uiKeys, FONT_KEY];

  await PIXI.Assets.load(allKeys);
};
