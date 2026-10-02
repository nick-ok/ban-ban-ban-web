import * as PIXI from 'pixi.js';

import { getParticleTextures } from '@/entities/message/lib/init-particle-textures';
import { randomNumberInRange } from '@/shared/lib';

import type { ParticleLayer } from './create-particle-layer';

interface SpawnParticlesOptions {
  layer: ParticleLayer;
  x: number;
  y: number;
  kind: 'positive' | 'negative';
}

const POSITIVE_COUNT = 100;
const NEGATIVE_COUNT = 100;

const POSITIVE_SPEED = 250;
const NEGATIVE_SPEED = 350;

const POSITIVE_LIFETIME = 2000;
const NEGATIVE_LIFETIME = 1700;

export const spawnParticles = ({
  layer,
  x,
  y,
  kind,
}: SpawnParticlesOptions): void => {
  const textures = getParticleTextures();
  const isPositive = kind === 'positive';

  const count = isPositive ? POSITIVE_COUNT : NEGATIVE_COUNT;
  const speed = isPositive ? POSITIVE_SPEED : NEGATIVE_SPEED;
  const lifetime = isPositive ? POSITIVE_LIFETIME : NEGATIVE_LIFETIME;

  const pool = isPositive
    ? [textures.digitOne, textures.digitZero, textures.sparkles]
    : [textures.errorSing, textures.bracketError];

  for (let i = 0; i < count; i += 1) {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
    const texture = pool[Math.floor(Math.random() * pool.length)];

    const sprite = new PIXI.Sprite(texture);
    sprite.anchor.set(0.5);
    sprite.scale = randomNumberInRange({ min: 0.5, max: 1, fractionDigits: 2 });
    sprite.position.set(x, y);
    sprite.alpha = 1;

    const speedJitter = speed * (0.7 + Math.random() * 0.6);

    const data = {
      sprite,
      velocityX: Math.cos(angle) * speedJitter,
      velocityY: Math.sin(angle) * speedJitter - 50,
      rotationSpeed: (Math.random() - 0.5) * 6,
      age: 0,
      lifetime: lifetime * (0.8 + Math.random() * 0.4),
      startAlpha: 1,
    };

    layer.container.addChild(sprite);
    layer.particles.push(data);
  }
};
