import { create, type StateCreator } from 'zustand';

import { i18n } from '@/features/i18n';
import { withPersist } from '@/shared/lib/with-persist';

interface SettingsState {
  isSettingsOpen: boolean;
  isSFXEnabled: boolean;
  isMusicEnabled: boolean;

  toggleSettingsDrawer: () => void;

  toggleSFX: () => void;
  toggleMusic: () => void;
  setLanguage: (lang: 'ru' | 'en') => void;
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

  setLanguage: (language) => {
    i18n.changeLanguage(language);
  },
});

export const useGameSettingsStore = create<SettingsState>()(
  withPersist(createStore, { name: 'game-settings', secure: false }),
);
