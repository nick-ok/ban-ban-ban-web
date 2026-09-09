import * as PIXI from 'pixi.js';

import {
  AVATAR_ASSETS,
  TITLE_ASSETS,
  type AvatarAssetKey,
  type TitleAssetKey,
} from '../config/assets';

export const loadMessageAssets = async (): Promise<void> => {
  const avatarKeys = Object.keys(AVATAR_ASSETS) as AvatarAssetKey[];
  const titleKeys = Object.keys(TITLE_ASSETS).filter(
    (key) => key !== 'empty',
  ) as TitleAssetKey[];

  const keys = [...avatarKeys, ...titleKeys];

  avatarKeys.forEach((key) => {
    if (!PIXI.Assets.resolver.hasKey(key)) {
      PIXI.Assets.add({
        alias: key,
        src: AVATAR_ASSETS[key],
      });
    }
  });

  titleKeys.forEach((key) => {
    if (!PIXI.Assets.resolver.hasKey(key)) {
      PIXI.Assets.add({
        alias: key,
        src: TITLE_ASSETS[key],
      });
    }
  });

  await PIXI.Assets.load(keys);
};
