import { WlaCurrenciesResponse } from './currencies-response.interface';
import { mockCurrency } from './currency.mock';

export const mockCurrenciesResponse: WlaCurrenciesResponse = {
  Currencies: [mockCurrency],
};
