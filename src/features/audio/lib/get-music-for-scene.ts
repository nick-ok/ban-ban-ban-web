import type { Scene } from '@/entities/navigation';

import type { AudioAssetKey } from '../config/audio';
import { SCENE_SOUND_MAP } from '../config/audio';

interface Options {
  scene: Scene;
  gameEnded?: boolean;
}

export const getMusicForScene = ({
  scene,
  gameEnded = false,
}: Options): AudioAssetKey | null => {
  if (gameEnded) {
    return 'brokenWorld';
  }

  const musicKey = SCENE_SOUND_MAP[scene];

  if (musicKey === null) {
    return null;
  }

  return musicKey;
};
