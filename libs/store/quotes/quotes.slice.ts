import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuotesResponseInterface } from '@white-label-airline/services/quotes';

import { FetchStatus } from '../models/fetch-status.enum';

import { initialQuotesState } from './quotes-state-initial.const';

export interface GetQuotesPayload {
  country: string;
  currency: string;
  from: string;
  to: string;
  departDate: Date;
  returnDate: Date;
}

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState: initialQuotesState,
  reducers: {
    getQuotes: {
      reducer() {
        return { response: null, fetchStatus: FetchStatus.Loading };
      },
      prepare({
        country,
        currency,
        from,
        to,
        departDate,
        returnDate,
      }: GetQuotesPayload) {
        return {
          payload: { country, currency, from, to, departDate, returnDate },
        };
      },
    },
    getQuotesSuccess(_, action: PayloadAction<QuotesResponseInterface>) {
      return { response: action.payload, fetchStatus: FetchStatus.Success };
    },
  },
});
