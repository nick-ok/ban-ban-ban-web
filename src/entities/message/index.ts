export type * from './model/types';

export type {
  AvatarAssetKey,
  TitleAssetKey,
  UIAssetKey,
} from './config/assets';

export { createGameMessage } from './ui/create-game-message';
export { createMessageByScenario } from './lib/create-message-by-scenario';
export { loadMessageAssets } from './lib/load-message-assets';
export { obfuscateToBinary } from './lib/obfuscate-to-binary';
export { HOLD_TIME_LONG_MS, HOLD_TIME_SHORT_MS } from './config/message-config';
export { destroyGameMessage } from './lib/destroy-game-message';
export {
  initParticleTextures,
  resetParticleTextures,
} from './lib/init-particle-textures';
