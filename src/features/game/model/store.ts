import { create } from 'zustand';

import type { GameStats } from './types';

interface GameStore {
  stats: GameStats;

  gameTime: number;
  isWorkingDayActive: boolean;
  isDayFinished: boolean;

  isGameComplete: boolean;
  accuracy: number;

  incrementStat: <K extends keyof GameStats>(statKey: K) => void;

  updateGameTime: (minutes: number) => void;
  finishWorkingDay: () => void;

  startGame: () => void;
  finishGame: (accuracy: number) => void;
  resetGame: () => void;
}

const INITIAL_STATS: GameStats = {
  total: 0,
  banned: 0,
  longBanned: 0,
  wrongBanned: 0,
  wrongLongBanned: 0,
  missed: 0,
  missedLong: 0,
};

const INITIAL_STATE = {
  stats: INITIAL_STATS,

  gameTime: 600,
  isWorkingDayActive: true,
  isDayFinished: false,
  isGameComplete: false,
  accuracy: 0,
};

export const useGameStore = create<GameStore>()((set) => ({
  ...INITIAL_STATE,

  incrementStat: (key) => {
    set((state) => ({
      stats: {
        ...state.stats,
        [key]: state.stats[key] + 1,
      },
    }));
  },

  updateGameTime: (minutes) => {
    set((state) => ({ gameTime: state.gameTime + minutes }));
  },

  finishWorkingDay: () => {
    set({
      isWorkingDayActive: false,
      isDayFinished: true,
    });
  },

  startGame: () => {
    set({
      ...INITIAL_STATE,
      gameTime: 600,
      isWorkingDayActive: true,
      isDayFinished: false,
      isGameComplete: false,
      accuracy: 0,
    });
  },

  finishGame: (accuracy) => {
    set({
      isGameComplete: true,
      isWorkingDayActive: false,
      accuracy,
    });
  },

  resetGame: () => {
    set(INITIAL_STATE);
  },
}));
