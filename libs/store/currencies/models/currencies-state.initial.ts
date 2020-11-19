import { FetchStatus } from '../../models/fetch-status.enum';

import { CurrenciesStateInterface } from './currencies-state.interface';

export const initialCurrenciesState: CurrenciesStateInterface = {
  fetchStatus: FetchStatus.Initial,
  currencies: [],
};
