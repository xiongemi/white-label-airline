import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

export function setI18n(loadPath: string) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(HttpApi)
    .init({
      backend: { loadPath },
      lng: 'en',
      fallbackLng: 'en',
      debug: true,

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });
  return i18n;
}
