import { CountriesResponse } from './countries-response.interface';
import { mockCountry } from './country.mock';

export const mockCountriesResponse: CountriesResponse = {
  Countries: [mockCountry],
};
