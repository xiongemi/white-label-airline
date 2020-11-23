import { RootStateInterface } from '../root';

const getError = (rootState: RootStateInterface): Error | string =>
  rootState.error;

export const errorSelectors = { getError };
