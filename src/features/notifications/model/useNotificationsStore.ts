import { create, type StateCreator } from 'zustand';

import { withPersist } from '@/shared/lib';

import type { NotificationStore } from './types';

const createStore: StateCreator<NotificationStore> = (set) => ({
  notifications: [],
  activeLive: [],

  addNotifications: (newNotifications) =>
    set((state) => {
      const existingIds = new Set(state.notifications.map((n) => n.id));
      const notifications = newNotifications.filter(
        (n) => !existingIds.has(n.id),
      );

      if (notifications.length === 0) {
        return {};
      }

      return {
        notifications: [...notifications, ...state.notifications],
        activeLive: [...state.activeLive, ...notifications],
      };
    }),

  dismissTopNotification: () =>
    set((state) => {
      if (state.activeLive.length === 0) {
        return {};
      }

      const [, ...remaining] = state.activeLive;

      return { activeLive: remaining };
    }),

  clearAllNotifications: () => set({ notifications: [], activeLive: [] }),
});

export const useNotificationsStore = create<NotificationStore>()(
  withPersist(createStore, {
    name: 'game-notifications',
    secure: false,
    partialize: (state) =>
      ({ notifications: state.notifications }) as NotificationStore,
  }),
);
