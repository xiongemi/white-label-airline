import { FetchStatus } from '../../models/fetch-status.enum';

import { WlaCurrenciesState } from './currencies-state.interface';

export const initialCurrenciesState: WlaCurrenciesState = {
  fetchStatus: FetchStatus.Initial,
  currencies: [],
};
