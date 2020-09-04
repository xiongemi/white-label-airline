import { RootState } from '../root';

const getLanguage = (rootState: RootState): string => rootState.language;

export const languageSelectors = { getLanguage };
