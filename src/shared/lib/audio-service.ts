import { Howl } from 'howler';

import { useGameSettingsStore } from '@/entities/game-settings';

import { AUDIO_ASSETS, type AudioAssetKey } from '../config/audio';

class AudioServiceClass {
  private sounds: Map<string, Howl> = new Map();

  private currentMusicKey: AudioAssetKey | null = null;
  private currentMusicId: number | null = null;

  async initAll() {
    const keys = Object.keys(AUDIO_ASSETS) as AudioAssetKey[];

    const promises = keys.map((key) => {
      return new Promise<void>((resolve) => {
        if (this.sounds.has(key)) {
          resolve();
          return;
        }

        const audioConfig = AUDIO_ASSETS[key];
        const isMusic = audioConfig.type === 'music';

        const sound = new Howl({
          src: [audioConfig.src],
          html5: false,
          preload: true,
          loop: isMusic,
          onload: () => resolve(),
          onloaderror: (error) => {
            console.error(
              `[AudioService] Ошибка загрузки звука "${key}":`,
              error,
            );

            resolve();
          },
        });
        this.sounds.set(key, sound);
      });
    });

    await Promise.all(promises);
  }

  play({
    key,
    volume = 1.0,
    randomize = true,
  }: {
    key: AudioAssetKey;
    volume?: number;
    randomize?: boolean;
  }) {
    const { isSFXEnabled } = useGameSettingsStore.getState();

    if (!isSFXEnabled) {
      return;
    }

    const sound = this.sounds.get(key);

    if (sound) {
      const soundId = sound.play();

      const randomPitch = randomize ? 0.93 + Math.random() * 0.14 : 1.0;
      sound.rate(randomPitch, soundId);

      const randomVolume = randomize
        ? volume * (0.95 + Math.random() * 0.05)
        : volume;
      sound.volume(randomVolume, soundId);
    }
  }

  playMusic(key: AudioAssetKey, volume = 1.0) {
    this.currentMusicKey = key;

    const { isMusicEnabled } = useGameSettingsStore.getState();

    if (!isMusicEnabled) {
      return;
    }

    const sound = this.sounds.get(key);

    if (sound && this.currentMusicId === null) {
      this.currentMusicId = sound.play();
      sound.volume(volume, this.currentMusicId);
    }
  }

  stopMusic() {
    if (this.currentMusicKey && this.currentMusicId !== null) {
      const sound = this.sounds.get(this.currentMusicKey);

      if (sound) {
        sound.stop(this.currentMusicId);
      }
      this.currentMusicId = null;
    }
  }

  syncMusicVolume(isMusicEnabled: boolean): void {
    const FADE_DURATION = 500;
    const MAX_VOLUME = 1;

    if (isMusicEnabled) {
      const activeKey = this.currentMusicKey ?? 'mainMenu';
      this.currentMusicKey = null;
      this.playMusic(activeKey, 0);

      const sound = this.sounds.get(activeKey);

      if (sound && this.currentMusicId !== null) {
        sound.fade(0, MAX_VOLUME, FADE_DURATION, this.currentMusicId);
      }

      return;
    }

    if (!this.currentMusicKey || this.currentMusicId === null) {
      return;
    }

    const sound = this.sounds.get(this.currentMusicKey);

    if (!sound) {
      return;
    }

    const musicId = this.currentMusicId;

    sound.fade(MAX_VOLUME, 0, FADE_DURATION, musicId);
    sound.once(
      'fade',
      () => {
        if (!useGameSettingsStore.getState().isMusicEnabled) {
          sound.stop(musicId);
          this.currentMusicKey = null;
          this.currentMusicId = null;
        }
      },
      musicId,
    );
  }

  unlockAudio() {
    const ctx = Howler.ctx;

    if (!ctx) {
      return;
    }

    if (ctx.state === 'suspended') {
      ctx
        .resume()
        .then(() => {
          this.play({ key: 'click', volume: 0 });
        })
        .catch(() => {});
    }
  }
}

export const AudioService = new AudioServiceClass();
