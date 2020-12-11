export interface LanguageProps {
  supportedLanguages: string[];
  currentLanguage: string;
  changeLanguage: (language: string) => void;
}
