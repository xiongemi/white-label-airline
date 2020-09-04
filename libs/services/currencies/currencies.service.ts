import { getApiHeaders } from '../api/api.service';
import { CurrenciesResponse } from './currencies-response.interface';

declare const process;

function getCurrencies(): Promise<CurrenciesResponse> {
  return fetch(process.env.NX_API_CURRENCIES_URL, {
    headers: getApiHeaders(),
  }).then((response: Response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
}

export const currenciesService = { getCurrencies };
