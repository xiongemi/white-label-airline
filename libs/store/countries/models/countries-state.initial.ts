import { FetchStatus } from '../../models/fetch-status.enum';

import { CountriesStateInterface } from './countries-state.interface';

export const initialCountriesState: CountriesStateInterface = {
  fetchStatus: FetchStatus.Initial,
  countries: [],
};
