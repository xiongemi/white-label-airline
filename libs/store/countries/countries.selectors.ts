import { RootState } from '../root';

const getCountries = (rootState: RootState) => rootState.countries;

export const countriesSelectors = { getCountries };
