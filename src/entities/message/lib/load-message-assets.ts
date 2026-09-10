import * as PIXI from 'pixi.js';

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
  const footerKeys = Object.keys(UI_ASSETS) as UIAssetKey[];

  const assetGroups: Array<{ keys: string[]; source: AssetRecord }> = [
    { keys: avatarKeys, source: AVATAR_ASSETS },
    { keys: titleKeys, source: TITLE_ASSETS },
    { keys: footerKeys, source: UI_ASSETS },
  ];

  assetGroups.forEach(({ keys, source }) => {
    keys.forEach((key) => {
      if (!PIXI.Assets.resolver.hasKey(key)) {
        PIXI.Assets.add({ alias: key, src: source[key] });
      }
    });
  });

  const allKeys = [...avatarKeys, ...titleKeys, ...footerKeys];

  await PIXI.Assets.load(allKeys);
};
