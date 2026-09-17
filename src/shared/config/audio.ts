export interface AudioConfigItem {
  src: string;
  type: 'music' | 'sfx';
}

// banned
// longBanned
// wrongBanned
// missed
// missedLong

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
