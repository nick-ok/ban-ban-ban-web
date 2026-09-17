import { useGameSettingsStore } from '@/entities/game-settings';
import { useNavigationStore } from '@/entities/navigation';

import { AudioService } from './audio-service';
import { getMusicForScene } from './get-music-for-scene';

export const subscribeAudioToStores = () => {
  useNavigationStore.subscribe((state, prev) => {
    const sceneChanged = state.scene !== prev.scene;
    const locationChanged =
      state.selectedLocationId !== prev.selectedLocationId;

    if (!sceneChanged && !locationChanged) {
      return;
    }

    const musicKey = getMusicForScene({
      scene: state.scene,
      locationId: state.selectedLocationId,
    });

    if (musicKey === null) {
      AudioService.stopMusic();

      return;
    }

    AudioService.playMusic(musicKey);
  });

  useGameSettingsStore.subscribe((state, prev) => {
    if (state.isMusicEnabled === prev.isMusicEnabled) {
      return;
    }

    if (!state.isMusicEnabled) {
      AudioService.stopMusic();

      return;
    }

    const navState = useNavigationStore.getState();

    const musicKey = getMusicForScene({
      scene: navState.scene,
      locationId: navState.selectedLocationId,
    });

    if (musicKey !== null) {
      AudioService.playMusic(musicKey);
    }
  });
};
