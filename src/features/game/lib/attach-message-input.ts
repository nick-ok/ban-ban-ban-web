import type { ExtendedPixiMessageContainer } from '@/entities/message';

export const attachMessageInput = (
  container: ExtendedPixiMessageContainer,
): void => {
  container.on('pointerdown', () => {
    container.isPressed = true;
    container.zIndex = 10;
  });

  const handlePointerUp = () => {
    if (!container.isPressed) {
      return;
    }

    container.isPressed = false;
    container.zIndex = 0;
  };

  container.on('pointerup', handlePointerUp);
  container.on('pointerupoutside', handlePointerUp);
};
