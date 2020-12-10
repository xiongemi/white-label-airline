import { FetchStatus } from '../../models/fetch-status.enum';

import { WlaQuotesState } from './quotes-state.interface';

export const initialQuotesState: WlaQuotesState = {
  quotes: {},
  fetchStatus: FetchStatus.Initial,
};
