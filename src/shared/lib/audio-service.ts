import { Howl } from 'howler';

import { AUDIO_ASSETS, type AudioAssetKey } from '../config/audio';

class AudioServiceClass {
  private sounds: Map<string, Howl> = new Map();
  private isMuted: boolean = false;

  async initAll() {
    const keys = Object.keys(AUDIO_ASSETS) as AudioAssetKey[];

    const promises = keys.map((key) => {
      return new Promise<void>((resolve) => {
        if (this.sounds.has(key)) {
          resolve();

          return;
        }

        const src = AUDIO_ASSETS[key];

        const sound = new Howl({
          src: [src],
          html5: false,
          preload: true,
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

  play(key: AudioAssetKey, volume = 1.0) {
    if (this.isMuted) {
      return;
    }

    const sound = this.sounds.get(key);

    if (sound) {
      const soundId = sound.play();

      const randomPitch = 0.93 + Math.random() * 0.14;
      sound.rate(randomPitch, soundId);

      const randomVolume = volume * (0.95 + Math.random() * 0.05);
      sound.volume(randomVolume, soundId);
    } else {
      console.warn(`[AudioService] Звук с ключом "${key}" не найден в кэше.`);
    }
  }

  stop(key: AudioAssetKey) {
    const sound = this.sounds.get(key);

    if (sound) {
      sound.stop();
    }
  }

  setMute(mute: boolean) {
    this.isMuted = mute;
    Howler.mute(mute);
  }

  getMuteStatus(): boolean {
    return this.isMuted;
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
          this.play('click', 0);
        })
        .catch((err) => {
          console.error(
            '[AudioService] Не удалось разблокировать AudioContext:',
            err,
          );
        });
    }
  }
}

export const AudioService = new AudioServiceClass();
