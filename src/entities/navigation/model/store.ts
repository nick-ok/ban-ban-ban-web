import { create } from 'zustand';

import type { LocationId } from '@/entities/location';
import type { ScenarioId } from '@/entities/scenario';

export type Scene =
  | 'bootstrap'
  | 'howToPlay'
  | 'intro'
  | 'lock'
  | 'notificationsCenter'
  | 'lobby'
  | 'preview'
  | 'briefing'
  | 'game'
  | 'dayend'
  | 'gameend';

interface NavigationStore {
  scene: Scene;
  selectedLocationId: LocationId | null;
  selectedScenarioId: ScenarioId | null;

  setScene: (scene: Scene) => void;
  setSelectedLocationId: (locationId: LocationId) => void;
  setSelectedScenarioId: (scenarioId: ScenarioId) => void;
  navigateToPreview: (locationId: LocationId) => void;
  closePreview: () => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  scene: 'bootstrap',
  selectedLocationId: null,
  selectedScenarioId: null,

  setScene: (scene) => set({ scene }),

  setSelectedLocationId: (selectedLocationId) => set({ selectedLocationId }),

  setSelectedScenarioId: (selectedScenarioId) => set({ selectedScenarioId }),

  navigateToPreview: (locationId) =>
    set({ scene: 'preview', selectedLocationId: locationId }),
  closePreview: () => set({ scene: 'lobby', selectedLocationId: null }),
}));
