import { CountryInterface } from '@white-label-airline/services/countries';

import { FetchStatus } from '../../models/fetch-status.enum';

export interface CountriesStateInterface {
  fetchStatus: FetchStatus;
  countries: CountryInterface[];
}
