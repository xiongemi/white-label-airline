import { FetchStatus } from '../../models/fetch-status.enum';

import { WlaCountriesState } from './countries-state.interface';

export const initialCountriesState: WlaCountriesState = {
  fetchStatus: FetchStatus.Initial,
  countries: [],
};
