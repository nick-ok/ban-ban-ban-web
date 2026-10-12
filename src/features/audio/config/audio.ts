import type { Scene } from '@/entities/navigation';

interface AudioConfigItem {
  src: string;
  type: 'music' | 'sfx';
}

export const AUDIO_ASSETS = {
  click: {
    src: '/audio/sfx/click.ogg',
    type: 'sfx',
  },
  clickSoft: {
    src: '/audio/sfx/click_soft.ogg',
    type: 'sfx',
  },
  chatMessage: {
    src: '/audio/sfx/message.ogg',
    type: 'sfx',
  },
  notification: {
    src: '/audio/sfx/notification.ogg',
    type: 'sfx',
  },
  ban: {
    src: '/audio/sfx/ban.ogg',
    type: 'sfx',
  },
  banError: {
    src: '/audio/sfx/ban_error.ogg',
    type: 'sfx',
  },
  tadam: {
    src: '/audio/sfx/tadam.ogg',
    type: 'sfx',
  },
  welcomeTheme: {
    src: '/audio/music/Welcome.ogg',
    type: 'music',
  },
  welcomeBNWTheme: {
    src: '/audio/music/Broken-New-World.ogg',
    type: 'music',
  },
  involution: {
    src: '/audio/music/Involution.ogg',
    type: 'music',
  },
  brokenWorld: {
    src: '/audio/music/Broken-New-World.ogg',
    type: 'music',
  },
  gameEndTheme: {
    src: '/audio/music/BNW.ogg',
    type: 'music',
  },
} as const satisfies Record<string, AudioConfigItem>;

export type AudioAssetKey = keyof typeof AUDIO_ASSETS;

type SoundMapValue = AudioAssetKey | null;

export const SCENE_SOUND_MAP: Record<Scene, SoundMapValue> = {
  lock: 'welcomeTheme',
  lobby: 'welcomeTheme',
  notificationsCenter: 'welcomeTheme',
  howToPlay: null,
  preview: 'welcomeTheme',
  briefing: null,
  bootstrap: null,
  dayend: null,
  gameend: null,
  game: null,
};
