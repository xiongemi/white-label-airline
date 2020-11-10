import { jest } from '@jest/globals';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
    };
  },
}));
