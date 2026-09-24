import type { ParticleLayer } from './create-particle-layer';

const GRAVITY = 400;

export const updateParticles = (
  layer: ParticleLayer,
  deltaMS: number,
): void => {
  const deltaSeconds = deltaMS / 1000;

  for (let i = layer.particles.length - 1; i >= 0; i -= 1) {
    const p = layer.particles[i];
    p.age += deltaMS;

    if (p.age >= p.lifetime) {
      layer.container.removeChild(p.sprite);
      p.sprite.destroy();
      layer.particles.splice(i, 1);
      continue;
    }

    p.velocityY += GRAVITY * deltaSeconds;
    p.sprite.x += p.velocityX * deltaSeconds;
    p.sprite.y += p.velocityY * deltaSeconds;
    p.sprite.rotation += p.rotationSpeed * deltaSeconds;

    const t = p.age / p.lifetime;
    p.sprite.alpha = p.startAlpha * (1 - t * t);
  }
};
