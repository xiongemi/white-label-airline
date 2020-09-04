import { getApiHeaders } from '../api/api.service';
import { CountriesResponse } from './countries-response.interface';

declare const process;

function getCountries(locale: string): Promise<CountriesResponse> {
  return fetch(process.env.NX_API_COUNTRIES_URL + '/' + locale, {
    headers: getApiHeaders(),
  }).then((response: Response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
}

export const countriesService = { getCountries };
