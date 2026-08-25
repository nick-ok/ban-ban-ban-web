import { create, type StateCreator } from 'zustand';

import type { LocationID } from '@/entities/location';
import { COMPLETION_THRESHOLD, type ScenarioID } from '@/entities/scenario';
import { withPersist } from '@/shared/lib/with-persist';

import type { PlayerProgress, ScenarioResult } from './types';

interface Actions {
  recordScenarioResult: (scenarioId: ScenarioID, accuracy: number) => void;
  unlockLocation: (locationId: LocationID) => void;
}

type Store = PlayerProgress & Actions;

const createStore: StateCreator<Store> = (set) => ({
  scenarioResults: {},
  completedScenarioIds: [],
  unlockedLocationIds: ['house-chat'],

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
});

export const usePlayerProgressStore = create<Store>()(
  withPersist(createStore, { name: 'banbanban-progress' }),
);
