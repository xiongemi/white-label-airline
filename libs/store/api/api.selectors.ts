import { RootState } from '../root';

export const getApiKey = (rootState: RootState): string => rootState.api;

export const apiSelectors = { getApiKey };
