import * as PIXI from 'pixi.js';

interface ParticleTextures {
  zero: PIXI.Texture;
  one: PIXI.Texture;
  error: PIXI.Texture;
  exclamation: PIXI.Texture;
}

const createCharTexture = (
  app: PIXI.Application,
  char: string,
  color: number,
): PIXI.Texture => {
  const text = new PIXI.Text({
    text: char,
    style: { fontSize: 22, fill: color, fontWeight: 'bold' },
  });

  const texture = app.renderer.generateTexture(text);
  text.destroy();

  return texture;
};

let particleTextures: ParticleTextures | null = null;

export const initParticleTextures = (app: PIXI.Application) => {
  if (particleTextures) {
    return;
  }

  particleTextures = {
    zero: createCharTexture(app, '0', 0x6e8b72),
    one: createCharTexture(app, '1', 0xd9984b),
    error: createCharTexture(app, 'ERROR', 0xc26d6d),
    exclamation: createCharTexture(app, '!', 0xc26d6d),
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
