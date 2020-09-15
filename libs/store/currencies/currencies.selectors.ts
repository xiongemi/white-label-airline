import { CurrencyInterface } from '@white-label-airline/services/currencies';

import { RootState } from '../root';

const getCurrencies = (rootState: RootState): CurrencyInterface[] =>
  rootState.currencies;

export const currenciesSelectors = { getCurrencies };
