import { WlaCountriesResponse } from './countries-response.interface';
import { mockCountry } from './country.mock';

export const mockCountriesResponse: WlaCountriesResponse = {
  Countries: [mockCountry],
};
