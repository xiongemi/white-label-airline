import { CurrenciesResponseInterface } from './currencies-response.interface';
import { mockCurrency } from './currency.mock';

export const mockCurrenciesResponse: CurrenciesResponseInterface = {
  Currencies: [mockCurrency],
};
