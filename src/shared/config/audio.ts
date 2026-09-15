export const AUDIO_ASSETS = {
  click: '/audio/ui-click.mp3',
  drawer: '/audio/ui-drawer.mp3',
  chatMessage: '/audio/chat-message.mp3',

  // banned: '/audio/game-ban-success.mp3',
  // longBanned: '/audio/game-longban-success.mp3',
  // wrongBanned: '/audio/game-error.mp3',
  // missed: '/audio/game-missed.mp3',
  // missedLong: '/audio/game-missed-long.mp3',
} as const;

export type AudioAssetKey = keyof typeof AUDIO_ASSETS;
