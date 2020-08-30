import { getApiHeaders } from '../api/api.service';
import { CountriesResponse } from './countries-response.interface';

function getCountries(): Promise<CountriesResponse> {
  return fetch(
    'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US',
    {
      headers: getApiHeaders(),
    }
  ).then((response: Response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
}

export const countriesService = { getCountries };
