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
  mainMenu: {
    src: '/audio/music/main-menu.mp3',
    type: 'music',
  },
  hoaGame: {
    src: '/audio/music/hoa-game.mp3',
    type: 'music',
  },
} as const satisfies Record<string, AudioConfigItem>;

export type AudioAssetKey = keyof typeof AUDIO_ASSETS;

type SoundMapValue =
  AudioAssetKey | null | ((locationId: LocationId) => AudioAssetKey | null);

export const SCENE_SOUND_MAP: Record<Scene, SoundMapValue> = {
  lock: 'mainMenu',
  lobby: 'mainMenu',
  notificationsCenter: 'mainMenu',
  howToPlay: null,
  preview: null,
  briefing: null,
  bootstrap: null,
  dayend: null,
  gameend: null,

  game: (locationId: LocationId): AudioAssetKey => {
    const locationMusic: Record<LocationId, AudioAssetKey> = {
      loc1: 'hoaGame',
      loc2: 'hoaGame',
      loc3: 'hoaGame',
      loc4: 'hoaGame',
      loc5: 'hoaGame',
      loc6: 'hoaGame',
    };

    return locationMusic[locationId] ?? 'hoaGame';
  },
};
