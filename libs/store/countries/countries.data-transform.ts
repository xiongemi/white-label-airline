import { WlaCountry } from '@white-label-airline/models/country';
import {
  CountriesResponse,
  CountryResponse,
} from '@white-label-airline/services/countries';

const transformCountriesResponseToCountries = (
  countriesResponse: CountriesResponse
): WlaCountry[] => {
  return countriesResponse.Countries.map(
    (countryResponse: CountryResponse) => ({
      name: countryResponse.Name,
      code: countryResponse.Code,
    })
  );
};

export const countriesDataTransfrom = { transformCountriesResponseToCountries };
