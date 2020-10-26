export interface LanguageProps {
  supportedLanguages: string[];
  currentLanguage: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  changeLanguage: Function;
}
