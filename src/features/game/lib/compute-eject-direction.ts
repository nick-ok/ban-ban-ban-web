import type { MessageSide } from '@/entities/message';

interface EjectDirection {
  velocityX: number;
  velocityY: number;
}

const EJECT_SPEED_X = 800;
const EJECT_SPEED_Y = -400;

export const computeEjectDirection = (side: MessageSide): EjectDirection => {
  const direction = side === 'left' ? -1 : 1;

  return {
    velocityX: direction * EJECT_SPEED_X,
    velocityY: EJECT_SPEED_Y,
  };
};
