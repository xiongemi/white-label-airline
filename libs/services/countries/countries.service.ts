import { getApiHeaders } from '../api/api.service';

import { WlaCountriesResponse } from './models/countries-response.interface';

declare const process;

async function getCountries(locale: string): Promise<WlaCountriesResponse> {
  const response = await fetch(
    process.env.NX_API_COUNTRIES_URL + '/' + locale,
    {
      headers: getApiHeaders(),
    }
  );
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export const countriesService = { getCountries };
