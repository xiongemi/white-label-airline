import { RootStateInterface } from '../root';

const getCountries = (rootState: RootStateInterface) => rootState.countries;

export const countriesSelectors = { getCountries };
