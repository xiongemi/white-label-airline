import { CurrencyInterface } from '@white-label-airline/services/currencies';

import { FetchStatus } from '../models/fetch-status.enum';
import { RootStateInterface } from '../root/root-state.interface';

import { CurrenciesStateInterface } from './models/currencies-state.interface';

const getCurrenciesState = (
  rootState: RootStateInterface
): CurrenciesStateInterface => rootState.currencies;

const getCurrencies = (rootState: RootStateInterface): CurrencyInterface[] =>
  getCurrenciesState(rootState).currencies;

const getCurrenciesFetchStatus = (rootState: RootStateInterface): FetchStatus =>
  getCurrenciesState(rootState).fetchStatus;

export const currenciesSelectors = { getCurrencies, getCurrenciesFetchStatus };
