import { Currency } from '@white-label-airline/services/currencies';

import { RootState } from '../root';

const getCurrencies = (rootState: RootState): Currency[] =>
  rootState.currencies;

export const currenciesSelectors = { getCurrencies };
