import * as PIXI from 'pixi.js';

import type { UIAssetKey } from '../config/assets';

interface ParticleTextures {
  errorSing: PIXI.Texture;
  sparkles: PIXI.Texture;
}

const createSpriteTexture = (assetKey: UIAssetKey): PIXI.Texture => {
  const source = PIXI.Assets.get<PIXI.Texture>(assetKey);

  if (!source) {
    throw new Error(`Texture for asset "${assetKey}" not found.`);
  }

  return source;
};

let particleTextures: ParticleTextures | null = null;

export const initParticleTextures = () => {
  if (particleTextures) {
    return;
  }

  particleTextures = {
    errorSing: createSpriteTexture('errorSing'),
    sparkles: createSpriteTexture('sparkles'),
  };
};

export const getParticleTextures = (): ParticleTextures => {
  if (!particleTextures) {
    throw new Error(
      'Particle textures not initialized. Call initParticleTextures(app) first.',
    );
  }

  return particleTextures;
};

export const resetParticleTextures = (): void => {
  particleTextures = null;
};
