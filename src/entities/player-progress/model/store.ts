import { create, type StateCreator } from 'zustand';

import type { LocationId } from '@/entities/location';
import { COMPLETION_THRESHOLD, type ScenarioId } from '@/entities/scenario';
import { withPersist } from '@/shared/lib';

import type { PlayerProgress, ScenarioResult } from './types';

interface Actions {
  recordScenarioResult: (scenarioId: ScenarioId, accuracy: number) => void;
  unlockLocation: (locationId: LocationId) => void;
  resetProgress: () => void;
}

type Store = PlayerProgress & Actions;

const createStore: StateCreator<Store> = (set) => ({
  scenarioResults: {},
  completedScenarioIds: [],
  unlockedLocationIds: ['loc1'],

  recordScenarioResult: (scenarioId, accuracy) => {
    set((state) => {
      const existing = state.scenarioResults[scenarioId];

      const updated: ScenarioResult = {
        bestAccuracy: Math.max(existing?.bestAccuracy ?? 0, accuracy),
        attemptCount: (existing?.attemptCount ?? 0) + 1,
      };

      const newResults = { ...state.scenarioResults, [scenarioId]: updated };

      const newCompleted =
        accuracy >= COMPLETION_THRESHOLD &&
        !state.completedScenarioIds.includes(scenarioId)
          ? [...state.completedScenarioIds, scenarioId]
          : state.completedScenarioIds;

      return {
        scenarioResults: newResults,
        completedScenarioIds: newCompleted,
      };
    });
  },

  unlockLocation: (locationId) => {
    set((state) => ({
      unlockedLocationIds: state.unlockedLocationIds.includes(locationId)
        ? state.unlockedLocationIds
        : [...state.unlockedLocationIds, locationId],
    }));
  },

  resetProgress: () =>
    set({
      scenarioResults: {},
      completedScenarioIds: [],
      unlockedLocationIds: ['loc1'],
    }),
});

export const usePlayerProgressStore = create<Store>()(
  withPersist(createStore, { name: 'banbanban-progress' }),
);
