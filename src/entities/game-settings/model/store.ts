import { create, type StateCreator } from 'zustand';

import { withPersist } from '@/shared/lib/with-persist';

interface SettingsState {
  isSettingsOpen: boolean;
  isSFXEnabled: boolean;
  isMusicEnabled: boolean;
  isHowToPlayReaded: boolean;

  toggleSettingsDrawer: () => void;

  toggleSFX: () => void;
  toggleMusic: () => void;

  setHowToPlayReaded: () => void;
}

const createStore: StateCreator<SettingsState> = (set) => ({
  isSettingsOpen: false,
  isSFXEnabled: true,
  isMusicEnabled: true,
  isHowToPlayReaded: false,

  toggleSettingsDrawer: () =>
    set((state) => ({ isSettingsOpen: !state.isSettingsOpen })),

  toggleSFX: () => set((state) => ({ isSFXEnabled: !state.isSFXEnabled })),

  toggleMusic: () =>
    set((state) => ({ isMusicEnabled: !state.isMusicEnabled })),

  setHowToPlayReaded: () => set(() => ({ isHowToPlayReaded: true })),
});

export const useGameSettingsStore = create<SettingsState>()(
  withPersist(createStore, { name: 'game-settings', secure: false }),
);
