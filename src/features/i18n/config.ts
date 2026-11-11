import i18n, { type InitOptions } from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ru from './locales/ru.json';

const config: InitOptions = {
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  returnEmptyString: true,
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
    lookupLocalStorage: 'lng',
  },
};

i18n.use(languageDetector).use(initReactI18next).init(config);

export const SUPPORTED_LANGUAGES = ['ru', 'en'] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export { i18n };
