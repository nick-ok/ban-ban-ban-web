interface SpawnTimer {
  tick: (deltaMS: number, onSpawn: () => void) => void;
  reset: () => void;
}

export const createSpawnTimer = (spawnSpeed: number): SpawnTimer => {
  const spawnInterval = 1000;
  let elapsed = 0;

  return {
    tick: (deltaMS, onSpawn) => {
      elapsed += deltaMS * spawnSpeed;

      if (elapsed >= spawnInterval) {
        elapsed = 0;
        onSpawn();
      }
    },
    reset: () => {
      elapsed = 0;
    },
  };
};
