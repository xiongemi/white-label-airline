import { WlaCountry } from '@white-label-airline/models/country';

import { FetchStatus } from '../../models/fetch-status.enum';

export interface WlaCountriesState {
  fetchStatus: FetchStatus;
  countries: WlaCountry[];
}
