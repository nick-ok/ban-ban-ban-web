import { GAME_MINUTES_PER_SECOND } from '../config/constants';

interface TickGameClockOptions {
  deltaMS: number;
  isAutomoderation: boolean;
  updateGameTime: (minutes: number) => void;
}

export const tickGameClock = ({
  deltaMS,
  isAutomoderation,
  updateGameTime,
}: TickGameClockOptions): void => {
  if (isAutomoderation) {
    return;
  }

  const gameMinutesPassed = (deltaMS / 1000) * GAME_MINUTES_PER_SECOND;
  updateGameTime(gameMinutesPassed);
};
