import { jest } from '@jest/globals';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
    };
  },
}));

jest.mock('@white-label-airline/services/i18n', () => ({
  getCurrentLanguage: () => 'en',
  changeLanguage: (language: string) => language,
}));
