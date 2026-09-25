import {
  HOLD_TIME_LONG_MS,
  HOLD_TIME_SHORT_MS,
  type BanAction,
  type ExtendedPixiMessageContainer,
} from '@/entities/message';

export const initMessageState = (
  container: ExtendedPixiMessageContainer,
  banAction: BanAction,
): void => {
  container.isPressed = false;
  container.holdTime = 0;
  container.targetTime =
    banAction === 'longBan' ? HOLD_TIME_LONG_MS : HOLD_TIME_SHORT_MS;
};
