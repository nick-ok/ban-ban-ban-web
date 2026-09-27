import * as PIXI from 'pixi.js';

import type { ExtendedPixiMessageContainer } from '@/entities/message';

import type { StatKeyType } from '../model/types';
import type { ParticleLayer } from './create-particle-layer';
import type { ScreenShake } from './screen-shake';
import { updateDyingMessage } from './update-dying-message';
import { updateMessageHold } from './update-message-hold';
import { updateMessageMotion } from './update-message-motion';

interface UpdateMessageContext {
  stage: PIXI.Container;
  deltaMS: number;
  elapsedMS: number;
  particleLayer: ParticleLayer | null;
  screenShake: ScreenShake | null;
  incrementStat: (key: StatKeyType) => void;
}

export const updateMessage = (
  child: ExtendedPixiMessageContainer,
  ctx: UpdateMessageContext,
): void => {
  if (child.holdTime === undefined) {
    child.holdTime = 0;
  }

  if (child.isDying) {
    updateDyingMessage(child, ctx);

    return;
  }

  if (child.isPressed || child.holdTime > 0) {
    updateMessageHold(child, ctx);
    return;
  }

  updateMessageMotion(child, ctx);
};
