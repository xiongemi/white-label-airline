import { WlaCountry } from '@white-label-airline/models/country';

import { FetchStatus } from '../models/fetch-status.enum';
import { WlaRootState } from '../root/models/root-state.interface';

import { WlaCountriesState } from './models/countries-state.interface';

const getCountriesState = (rootState: WlaRootState): WlaCountriesState =>
  rootState.countries;

const getCountries = (rootState: WlaRootState): WlaCountry[] =>
  getCountriesState(rootState).countries;

const getCountriesFetchStatus = (rootState: WlaRootState): FetchStatus =>
  getCountriesState(rootState).fetchStatus;

export const countriesSelectors = { getCountries, getCountriesFetchStatus };
