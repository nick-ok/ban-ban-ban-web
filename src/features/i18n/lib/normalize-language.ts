import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '../config';

export const normalizeLanguage = (lng: string): SupportedLanguage => {
  const short = lng.split('-')[0] as SupportedLanguage;

  return SUPPORTED_LANGUAGES.includes(short) ? short : SUPPORTED_LANGUAGES[0];
};
