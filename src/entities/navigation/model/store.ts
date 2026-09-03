import { create } from 'zustand';

import type { LocationId } from '@/entities/location';

export type Scene =
  'bootstrap' | 'lock' | 'lobby' | 'preview' | 'briefing' | 'game' | 'dayend';

interface NavigationStore {
  scene: Scene;
  selectedLocationId: LocationId | null;
  navigateToPreview: (locationId: LocationId) => void;
  closePreview: () => void;
  setScene: (scene: Scene) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  scene: 'lock',
  selectedLocationId: null,

  navigateToPreview: (locationId) =>
    set({ scene: 'preview', selectedLocationId: locationId }),
  closePreview: () => set({ scene: 'lobby', selectedLocationId: null }),
  setScene: (scene) => set({ scene }),
}));
