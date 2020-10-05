import { RootStateInterface } from '../root';

const getLanguage = (rootState: RootStateInterface): string =>
  rootState.language;

export const languageSelectors = { getLanguage };
