import * as PIXI from 'pixi.js';

import type { ExtendedPixiMessageContainer } from '@/entities/message';
import { destroyGameMessage } from '@/entities/message/lib/destroy-game-message';

import { computeEjectDirection } from './compute-eject-direction';
import type { ParticleLayer } from './create-particle-layer';
import type { ScreenShake } from './screen-shake';
import { spawnBanStamp } from './spawn-ban-stamp';
import { spawnParticles } from './spawn-particles';

const STAMP_DURATION_MS = 180;
const EJECT_DURATION_MS = 500;

interface UpdateDyingMessageContext {
  stage: PIXI.Container;
  deltaMS: number;
  particleLayer: ParticleLayer | null;
  screenShake: ScreenShake | null;
}

export const updateDyingMessage = (
  child: ExtendedPixiMessageContainer,
  ctx: UpdateDyingMessageContext,
): void => {
  const { stage, deltaMS } = ctx;

  if (child.dyingPhase === 'stamp') {
    if (!child.banStampState) {
      child.banStampState = spawnBanStamp(child);
    }

    child.dyingElapsed += deltaMS;
    const t = Math.min(1, child.dyingElapsed / STAMP_DURATION_MS);
    const eased = 1 - Math.pow(1 - t, 3);

    const { sprite, startRotation, targetRotation, startScale, targetScale } =
      child.banStampState;

    sprite.scale.set(startScale + (targetScale - startScale) * eased);
    sprite.rotation = startRotation + (targetRotation - startRotation) * eased;

    if (t >= 1) {
      child.dyingPhase = 'eject';
      child.dyingElapsed = 0;

      const effect = child.dyingEffect;

      if (effect?.shake && ctx.screenShake) {
        ctx.screenShake.start({
          intensity: effect.shake,
          duration: 180,
        });
      }
    }

    return;
  }

  if (child.dyingPhase === 'eject') {
    if (!child.ejectState) {
      const { velocityX, velocityY } = computeEjectDirection(
        child.messageData.side,
      );

      child.ejectState = {
        startX: child.x,
        startY: child.y,
        velocityX,
        velocityY,
        rotationStart: child.rotation,
        rotationTarget: child.rotation + (velocityX < 0 ? -0.3 : 0.3),
      };

      if (ctx.particleLayer) {
        const kind = child.dyingEffect?.particles ?? 'positive';
        const bounds = child.getLocalBounds();

        spawnParticles({
          layer: ctx.particleLayer,
          x: child.x + bounds.width / 2,
          y: child.y + bounds.height / 2,
          kind,
        });
      }
    }

    child.dyingElapsed += deltaMS;

    const t = Math.min(1, child.dyingElapsed / EJECT_DURATION_MS);
    const eased = 1 - Math.pow(1 - t, 3);

    const {
      startX,
      startY,
      velocityX,
      velocityY,
      rotationStart,
      rotationTarget,
    } = child.ejectState;

    child.x = startX + velocityX * (child.dyingElapsed / 1000);
    child.y = startY + velocityY * (child.dyingElapsed / 1000);
    child.rotation = rotationStart + (rotationTarget - rotationStart) * eased;
    child.alpha = 1 - eased;

    if (t >= 1) {
      destroyGameMessage({
        stage,
        container: child,
      });
    }
  }
};
