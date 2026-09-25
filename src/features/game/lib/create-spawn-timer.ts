import { SPAWN_INTERVAL } from '../config/constants';

interface SpawnTimer {
  tick: (deltaMS: number, onSpawn: () => void) => void;
  reset: () => void;
}

export const createSpawnTimer = (): SpawnTimer => {
  let elapsed = 0;

  return {
    tick: (deltaMS, onSpawn) => {
      elapsed += deltaMS;

      if (elapsed >= SPAWN_INTERVAL) {
        elapsed = 0;
        onSpawn();
      }
    },
    reset: () => {
      elapsed = 0;
    },
  };
};
