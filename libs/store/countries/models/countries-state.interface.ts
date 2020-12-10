import { WlaCountry } from '@white-label-airline/services/countries';

import { FetchStatus } from '../../models/fetch-status.enum';

export interface WlaCountriesState {
  fetchStatus: FetchStatus;
  countries: WlaCountry[];
}
