import { CurrencyInterface } from '@white-label-airline/services/currencies';

import { FetchStatus } from '../models/fetch-status.enum';
import { WlaRootState } from '../root/models/root-state.interface';

import { WlaCurrenciesState } from './models/currencies-state.interface';

const getCurrenciesState = (rootState: WlaRootState): WlaCurrenciesState =>
  rootState.currencies;

const getCurrencies = (rootState: WlaRootState): CurrencyInterface[] =>
  getCurrenciesState(rootState).currencies;

const getCurrenciesFetchStatus = (rootState: WlaRootState): FetchStatus =>
  getCurrenciesState(rootState).fetchStatus;

export const currenciesSelectors = { getCurrencies, getCurrenciesFetchStatus };
