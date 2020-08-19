import { RootState } from '../root';

const getCountriesState = (rootState: RootState) => rootState.countries;

export const countriesSelectors = { getCountriesState };
