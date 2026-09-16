import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import type { StateCreator } from 'zustand';
import {
  createJSONStorage,
  persist,
  type PersistOptions,
  type StateStorage,
} from 'zustand/middleware';

const ENCRYPTION_KEY =
  import.meta.env.VITE_ENCRYPTION_KEY || 'game-default-fallback-safe-key';

const secureStorage: StateStorage = {
  getItem: (name: string): string | null => {
    const rawValue = localStorage.getItem(name);

    if (!rawValue) {
      return null;
    }

    try {
      const bytes = AES.decrypt(rawValue, ENCRYPTION_KEY);
      const decryptedString = bytes.toString(Utf8);

      return decryptedString || null;
    } catch (error) {
      console.error(
        `[withPersist] Ошибка дешифрования данных для ключа "${name}":`,
        error,
      );

      return null;
    }
  },

  setItem: (name: string, value: string): void => {
    try {
      const encryptedValue = AES.encrypt(value, ENCRYPTION_KEY).toString();

      localStorage.setItem(name, encryptedValue);
    } catch (error) {
      console.error(
        `[withPersist] Ошибка шифрования данных для ключа "${name}":`,
        error,
      );
    }
  },

  removeItem: (name: string): void => {
    localStorage.removeItem(name);
  },
};

export function withPersist<T>(
  store: StateCreator<T, [], []>,
  options: PersistOptions<T> & { secure?: boolean },
) {
  const { secure = true, ...persistOptions } = options;

  return persist(store, {
    ...persistOptions,
    storage: createJSONStorage(() => (secure ? secureStorage : localStorage)),
  });
}
