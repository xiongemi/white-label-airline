import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

import { FetchStatus } from '../models/fetch-status.enum';

import { initialQuotesState } from './quotes-state-initial.const';

export interface GetQuotesPayload {
  country: string;
  currency: string;
  from: string;
  to: string;
  departDate: string; // date in 'yyyy-MM-dd'
  returnDate?: string; // date in 'yyyy-MM-dd'
  isOutbound?: boolean;
}

export interface GetQuotesSuccessPayload {
  quotes: QuotePerLegInterface[];
  isOutbound: boolean;
}

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState: initialQuotesState,
  reducers: {
    getQuotes: {
      reducer() {
        return {
          quotes: {},
          fetchStatus: FetchStatus.Loading,
        };
      },
      prepare(payload: GetQuotesPayload) {
        return {
          payload,
        };
      },
    },
    getQuotesSuccess(state, action: PayloadAction<GetQuotesSuccessPayload>) {
      if (action.payload.isOutbound) {
        state.quotes.outbound = action.payload.quotes;
      } else {
        state.quotes.inbound = action.payload.quotes;
      }
      state.fetchStatus = FetchStatus.Success;
    },
    getQuotesError(state) {
      state.fetchStatus = FetchStatus.Error;
    },
  },
});
