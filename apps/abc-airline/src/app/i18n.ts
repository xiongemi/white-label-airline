import { initI18n } from '@white-label-airline/services/i18n';

const defaultLanguage = 'zh-CN';
const supportedLanguages = [defaultLanguage, 'en-GB'];

const appInitI18n = () => {
  initI18n('./assets/i18n/{{lng}}.json', defaultLanguage, supportedLanguages);
};

export { defaultLanguage, supportedLanguages, appInitI18n };
