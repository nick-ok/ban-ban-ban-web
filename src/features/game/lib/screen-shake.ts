import * as PIXI from 'pixi.js';

interface ShakeState {
  elapsed: number;
  duration: number;
  intensity: number;
}

export interface ScreenShake {
  start: (options: { intensity: number; duration: number }) => void;
  update: (deltaMS: number) => void;
  reset: () => void;
}

export const createScreenShake = (app: PIXI.Application): ScreenShake => {
  const stage = app.stage;

  let state: ShakeState | null = null;
  let originalPivotX = 0;
  let originalPivotY = 0;

  return {
    start: ({ intensity, duration }) => {
      if (intensity <= 0) {
        return;
      }

      if (!state) {
        originalPivotX = stage.pivot.x;
        originalPivotY = stage.pivot.y;
      }

      state = {
        elapsed: 0,
        duration,
        intensity,
      };
    },

    update: (deltaMS) => {
      if (!state) {
        return;
      }

      state.elapsed += deltaMS;

      if (state.elapsed >= state.duration) {
        stage.pivot.set(originalPivotX, originalPivotY);
        state = null;
        return;
      }

      const progress = state.elapsed / state.duration;
      const decay = 1 - progress;

      const offsetX = (Math.random() * 2 - 1) * state.intensity * decay;
      const offsetY = (Math.random() * 2 - 1) * state.intensity * decay;

      stage.pivot.set(originalPivotX + offsetX, originalPivotY + offsetY);
    },

    reset: () => {
      if (state) {
        stage.pivot.set(originalPivotX, originalPivotY);
        state = null;
      }
    },
  };
};
