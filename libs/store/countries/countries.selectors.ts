import { CountryInterface } from '@white-label-airline/services/countries';

import { FetchStatus } from '../models/fetch-status.enum';
import { RootStateInterface } from '../root/root-state.interface';

import { CountriesStateInterface } from './models/countries-state.interface';

const getCountriesState = (
  rootState: RootStateInterface
): CountriesStateInterface => rootState.countries;

const getCountries = (rootState: RootStateInterface): CountryInterface[] =>
  getCountriesState(rootState).countries;

const getCountriesFetchStatus = (rootState: RootStateInterface): FetchStatus =>
  getCountriesState(rootState).fetchStatus;

export const countriesSelectors = { getCountries, getCountriesFetchStatus };
