import { create } from 'zustand';

import type { LocationId } from '@/entities/location';
import type { ScenarioId } from '@/entities/scenario';

export type Scene =
  'bootstrap' | 'lock' | 'lobby' | 'preview' | 'briefing' | 'game' | 'dayend';

interface NavigationStore {
  scene: Scene;
  selectedLocationId: LocationId | null;
  selectedScenarioId: ScenarioId | null;

  navigateToPreview: (locationId: LocationId) => void;
  closePreview: () => void;

  setScene: (scene: Scene) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  scene: 'bootstrap',
  selectedLocationId: null,
  selectedScenarioId: null,

  navigateToPreview: (locationId) =>
    set({ scene: 'preview', selectedLocationId: locationId }),
  closePreview: () => set({ scene: 'lobby', selectedLocationId: null }),

  setScene: (scene) => set({ scene }),
}));
