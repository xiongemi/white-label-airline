import { WlaCurrency } from '@white-label-airline/models/currency';
import {
  CurrenciesResponse,
  CurrencyResponse,
} from '@white-label-airline/services/currencies';

const transformCurrenciesResponseToCurrencies = (
  currenciesResponse: CurrenciesResponse
): WlaCurrency[] => {
  return currenciesResponse.Currencies.map(
    (currencyResponse: CurrencyResponse) => ({
      code: currencyResponse.Code,
    })
  );
};

export const currenciesDataTransform = {
  transformCurrenciesResponseToCurrencies,
};
