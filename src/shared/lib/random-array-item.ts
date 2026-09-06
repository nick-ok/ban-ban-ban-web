export const randomArrayItem = <T>(arr: T[]): T | null => {
  if (!arr.length) {
    return null;
  }

  const rndIdx = Math.floor(Math.random() * arr.length);

  return arr[rndIdx];
};
