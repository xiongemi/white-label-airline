import { getApiHeaders } from '../api/api.service';

import { CurrenciesResponse } from './models/currencies-response.interface';

declare const process;

async function getCurrencies(): Promise<CurrenciesResponse> {
  const response = await fetch(process.env.NX_API_CURRENCIES_URL, {
    headers: getApiHeaders(),
  });
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export const currenciesService = { getCurrencies };
