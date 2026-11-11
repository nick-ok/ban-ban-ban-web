import { Howl } from 'howler';

import { useGameSettingsStore } from '@/entities/game-settings';

import { AUDIO_ASSETS, type AudioAssetKey } from '../config/audio';

class AudioServiceClass {
  private sounds: Map<string, Howl> = new Map();

  private currentMusicKey: AudioAssetKey | null = null;
  private currentMusicId: number | null = null;

  private readonly fadeDuration = 500;

  async initAll() {
    const keys = Object.keys(AUDIO_ASSETS) as AudioAssetKey[];

    const promises = keys.map((key) => {
      return new Promise<void>((resolve) => {
        if (this.sounds.has(key)) {
          resolve();
          return;
        }

        const audioConfig = AUDIO_ASSETS[key];
        // const isMusic = audioConfig.type === 'music';

        const sound = new Howl({
          src: [audioConfig.src],
          html5: false,
          preload: true,
          // loop: isMusic,
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

  playMusic(key: AudioAssetKey, loop = true) {
    const { isMusicEnabled } = useGameSettingsStore.getState();

    if (!isMusicEnabled) {
      return;
    }

    if (key === this.currentMusicKey) {
      return;
    }

    if (this.currentMusicKey !== null && this.currentMusicId !== null) {
      const prevSound = this.sounds.get(this.currentMusicKey);

      if (prevSound) {
        const prevId = this.currentMusicId;

        prevSound.fade(
          prevSound.volume(prevId) as number,
          0,
          this.fadeDuration,
          prevId,
        );

        setTimeout(() => {
          prevSound.stop(prevId);
        }, this.fadeDuration);
      }
    }

    const sound = this.sounds.get(key);

    if (!sound) {
      this.currentMusicKey = null;
      this.currentMusicId = null;

      return;
    }

    const musicId = sound.play();

    sound.loop(loop, musicId);

    sound.volume(0, musicId);
    sound.fade(0, 1, this.fadeDuration, musicId);

    if (!loop) {
      sound.once(
        'end',
        () => {
          if (this.currentMusicId === musicId) {
            this.currentMusicKey = null;
            this.currentMusicId = null;
          }
        },
        musicId,
      );
    }

    this.currentMusicKey = key;
    this.currentMusicId = musicId;
  }

  setMusicVolume(volume: number) {
    if (this.currentMusicKey === null || this.currentMusicId === null) {
      return;
    }

    const sound = this.sounds.get(this.currentMusicKey);

    if (sound) {
      const clampedVolume = Math.max(0, Math.min(1, volume));

      sound.fade(
        sound.volume(this.currentMusicId) as number,
        clampedVolume,
        this.fadeDuration,
        this.currentMusicId,
      );
    }
  }

  stopMusic() {
    if (this.currentMusicKey === null || this.currentMusicId === null) {
      return;
    }

    const sound = this.sounds.get(this.currentMusicKey);

    if (sound) {
      const musicId = this.currentMusicId;

      sound.fade(
        sound.volume(musicId) as number,
        0,
        this.fadeDuration,
        musicId,
      );

      setTimeout(() => {
        sound.stop(musicId);
      }, this.fadeDuration);
    }

    this.currentMusicKey = null;
    this.currentMusicId = null;
  }

  unlock() {
    const ctx = Howler.ctx;

    if (ctx && ctx.state === 'suspended') {
      return ctx.resume();
    }

    return Promise.resolve();
  }
}

export const AudioService = new AudioServiceClass();
