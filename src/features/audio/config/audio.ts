import type { LocationId } from '@/entities/location';
import type { Scene } from '@/entities/navigation';

interface AudioConfigItem {
  src: string;
  type: 'music' | 'sfx';
}

export const AUDIO_ASSETS = {
  click: {
    src: '/audio/sfx/ui-click.mp3',
    type: 'sfx',
  },
  drawer: {
    src: '/audio/sfx/ui-drawer.mp3',
    type: 'sfx',
  },
  chatMessage: {
    src: '/audio/sfx/chat-message.mp3',
    type: 'sfx',
  },
  notification: {
    src: '/audio/sfx/chat-message.mp3',
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
  gameTheme: {
    src: '/audio/music/Involution.ogg',
    type: 'music',
  },
  gameEndTheme: {
    src: '/audio/music/BNW.ogg',
    type: 'music',
  },
} as const satisfies Record<string, AudioConfigItem>;

export type AudioAssetKey = keyof typeof AUDIO_ASSETS;

type SoundMapValue =
  AudioAssetKey | null | ((locationId: LocationId) => AudioAssetKey | null);

export const SCENE_SOUND_MAP: Record<Scene, SoundMapValue> = {
  lock: 'welcomeTheme',
  lobby: 'welcomeTheme',
  notificationsCenter: 'welcomeTheme',
  howToPlay: null,
  preview: 'welcomeTheme',
  briefing: null,
  bootstrap: null,
  dayend: 'gameTheme',
  gameend: 'gameEndTheme',

  game: (locationId: LocationId): AudioAssetKey => {
    const locationMusic: Record<LocationId, AudioAssetKey> = {
      loc1: 'gameTheme',
      loc2: 'gameTheme',
      loc3: 'gameTheme',
      loc4: 'gameTheme',
      loc5: 'gameTheme',
      loc6: 'gameTheme',
    };

    return locationMusic[locationId] ?? 'gameTheme';
  },
};
