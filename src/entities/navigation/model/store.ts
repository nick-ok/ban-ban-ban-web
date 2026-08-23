import { create } from 'zustand';

export type Scene =
  'bootstrap' | 'lock' | 'lobby' | 'briefing' | 'game' | 'dayend';

interface NavigationStore {
  scene: Scene;
  setScene: (scene: Scene) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  scene: 'lock',
  setScene: (scene) => set({ scene }),
}));
