import type { LocationId } from '@/entities/location';
import type { Scene } from '@/entities/navigation';

import type { AudioAssetKey } from '../config/audio';
import { SCENE_SOUND_MAP } from '../config/audio';

interface Options {
  scene: Scene;
  locationId: LocationId | null;
}

export const getMusicForScene = ({
  scene,
  locationId,
}: Options): AudioAssetKey | null => {
  const mapValue = SCENE_SOUND_MAP[scene];

  if (mapValue === null) {
    return null;
  }

  if (typeof mapValue === 'function') {
    const activeLocation = locationId ?? 'loc1';

    return mapValue(activeLocation);
  }

  return mapValue;
};
