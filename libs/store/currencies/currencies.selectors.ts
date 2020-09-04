import { RootState } from '../root';
import { Currency } from '@white-label-airline/services/currencies';

const getCurrencies = (rootState: RootState): Currency[] =>
  rootState.currencies;

export const currenciesSelectors = { getCurrencies };
