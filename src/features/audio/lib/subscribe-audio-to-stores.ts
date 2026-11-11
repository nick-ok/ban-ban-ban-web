import { useGameSettingsStore } from '@/entities/game-settings';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress';

import { AudioService } from './audio-service';
import { getMusicForScene } from './get-music-for-scene';

const syncMusic = () => {
  const { isMusicEnabled } = useGameSettingsStore.getState();

  if (!isMusicEnabled) {
    AudioService.stopMusic();
    return;
  }

  const { scene } = useNavigationStore.getState();
  const { isGlobalAIActive } = usePlayerProgressStore.getState();

  const musicKey = getMusicForScene({
    scene,
    gameEnded: isGlobalAIActive,
  });

  if (musicKey === null) {
    AudioService.stopMusic();
    return;
  }

  AudioService.playMusic(musicKey);
};

export const subscribeAudioToStores = () => {
  useNavigationStore.subscribe((state, prev) => {
    const sceneChanged = state.scene !== prev.scene;
    const locationChanged =
      state.selectedLocationId !== prev.selectedLocationId;

    if (!sceneChanged && !locationChanged) {
      return;
    }

    syncMusic();
  });

  useGameSettingsStore.subscribe((state, prev) => {
    if (state.isMusicEnabled === prev.isMusicEnabled) {
      return;
    }

    syncMusic();
  });

  usePlayerProgressStore.subscribe((state, prev) => {
    if (state.isGlobalAIActive === prev.isGlobalAIActive) {
      return;
    }

    syncMusic();
  });
};
