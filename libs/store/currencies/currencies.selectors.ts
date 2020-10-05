import { CurrencyInterface } from '@white-label-airline/services/currencies';

import { RootStateInterface } from '../root';

const getCurrencies = (rootState: RootStateInterface): CurrencyInterface[] =>
  rootState.currencies;

export const currenciesSelectors = { getCurrencies };
