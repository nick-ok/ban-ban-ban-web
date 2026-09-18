import { create, type StateCreator } from 'zustand';

import { withPersist } from '@/shared/lib/with-persist';

interface SettingsState {
  isSettingsOpen: boolean;
  isSFXEnabled: boolean;
  isMusicEnabled: boolean;
  isIntroSkipped: boolean;

  toggleSettingsDrawer: () => void;

  toggleSFX: () => void;
  toggleMusic: () => void;

  setIntroSkipped: (isSkipped: boolean) => void;
}

const createStore: StateCreator<SettingsState> = (set) => ({
  isSettingsOpen: false,
  isSFXEnabled: true,
  isMusicEnabled: true,
  isIntroSkipped: false,

  toggleSettingsDrawer: () =>
    set((state) => ({ isSettingsOpen: !state.isSettingsOpen })),

  toggleSFX: () => set((state) => ({ isSFXEnabled: !state.isSFXEnabled })),

  toggleMusic: () =>
    set((state) => ({ isMusicEnabled: !state.isMusicEnabled })),

  setIntroSkipped: (isIntroSkipped) => set({ isIntroSkipped }),
});

export const useGameSettingsStore = create<SettingsState>()(
  withPersist(createStore, { name: 'game-settings', secure: false }),
);
