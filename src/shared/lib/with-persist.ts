import type { StateCreator } from 'zustand';
import { persist, type PersistOptions } from 'zustand/middleware';

export function withPersist<T>(
  store: StateCreator<T, [], []>,
  options: PersistOptions<T>,
) {
  return persist(store, options);
}
