import { create, type StateCreator } from 'zustand';

import { withPersist } from '@/shared/lib/with-persist';

interface SettingsState {
  isSettingsOpen: boolean;
  isSFXEnabled: boolean;
  isMusicEnabled: boolean;

  toggleSettingsDrawer: () => void;

  toggleSFX: () => void;
  toggleMusic: () => void;
}

const createStore: StateCreator<SettingsState> = (set) => ({
  isSettingsOpen: false,
  isSFXEnabled: true,
  isMusicEnabled: true,

  toggleSettingsDrawer: () =>
    set((state) => ({ isSettingsOpen: !state.isSettingsOpen })),

  toggleSFX: () => set((state) => ({ isSFXEnabled: !state.isSFXEnabled })),

  toggleMusic: () =>
    set((state) => ({ isMusicEnabled: !state.isMusicEnabled })),
});

export const useGameSettingsStore = create<SettingsState>()(
  withPersist(createStore, { name: 'game-settings', secure: false }),
);
