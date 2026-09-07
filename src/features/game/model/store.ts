import { create } from 'zustand';

import type { ScenarioId } from '@/entities/scenario';

import type { GameStats } from './types';

interface GameStore {
  currentScenarioId: ScenarioId | null;
  stats: GameStats;

  gameTime: number;
  dayDuration: number;
  elapsedTime: number;

  isWorkingDayActive: boolean;
  isDayFinished: boolean;

  isGameComplete: boolean;
  accuracy: number;

  incrementStat: <K extends keyof GameStats>(statKey: K) => void;

  updateGameTime: (minutes: number) => void;
  finishWorkingDay: () => void;

  startGame: (params: {
    startTime: number;
    endTime: number;
    scenarioId: ScenarioId;
  }) => void;
  finishGame: () => void;
  resetGame: () => void;
}

const INITIAL_STATS: GameStats = {
  total: 0,
  banned: 0,
  longBanned: 0,
  wrongBanned: 0,
  missed: 0,
  missedLong: 0,
};

const INITIAL_STATE = {
  currentScenarioId: null,
  stats: INITIAL_STATS,

  gameTime: 0,
  dayDuration: 0,
  elapsedTime: 0,

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
    set((state) => {
      if (!state.isWorkingDayActive) {
        return {};
      }

      const nextElapsed = state.elapsedTime + minutes;

      if (nextElapsed >= state.dayDuration) {
        return {
          elapsedTime: state.dayDuration,
          gameTime: state.gameTime + (state.dayDuration - state.elapsedTime),

          isWorkingDayActive: false,
          isDayFinished: true,
        };
      }

      return { elapsedTime: nextElapsed, gameTime: state.gameTime + minutes };
    });
  },

  finishWorkingDay: () => {
    set({
      isWorkingDayActive: false,
      isDayFinished: true,
    });
  },

  startGame: ({ startTime, endTime, scenarioId }) => {
    set({
      ...INITIAL_STATE,
      currentScenarioId: scenarioId,
      gameTime: startTime,
      elapsedTime: 0,
      dayDuration: endTime - startTime,

      isWorkingDayActive: true,
      isDayFinished: false,
      isGameComplete: false,
      accuracy: 0,
    });
  },

  finishGame: () => {
    set({
      isGameComplete: true,
      isWorkingDayActive: false,
    });
  },

  resetGame: () => {
    set(INITIAL_STATE);
  },
}));
