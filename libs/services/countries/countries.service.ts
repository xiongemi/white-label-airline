import { getApiHeaders } from '../api/api.service';
import { CountriesResponse } from './countries-responose.interface';

function getCountries(apiKey: string): Promise<CountriesResponse> {
  return fetch(
    'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US',
    {
      headers: getApiHeaders(apiKey),
    }
  ).then((response: Response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
}

export const countriesService = { getCountries };
