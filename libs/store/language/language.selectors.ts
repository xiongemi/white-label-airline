import { WlaRootState } from '../root';

const getLanguage = (state: WlaRootState): string => {
  return state.language;
};

export const languageSelectors = { getLanguage };
