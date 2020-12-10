import { WlaRootState } from '../root';

const getError = (rootState: WlaRootState): Error | string => rootState.error;

export const errorSelectors = { getError };
