import * as PIXI from 'pixi.js';

export interface ParticleData {
  sprite: PIXI.Sprite;
  velocityX: number;
  velocityY: number;
  rotationSpeed: number;
  age: number;
  lifetime: number;
  startAlpha: number;
}

export interface ParticleLayer {
  container: PIXI.Container;
  particles: ParticleData[];
}

export const createParticleLayer = (): ParticleLayer => {
  const container = new PIXI.Container();
  container.zIndex = 100;

  return { container, particles: [] };
};
