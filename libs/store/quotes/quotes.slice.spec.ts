import { mockQuotePerLeg } from '@white-label-airline/services/quotes';

import { FetchStatus } from '../models/fetch-status.enum';

import { mockGetQuotesPayload } from './models/get-quotes-payload.mock';
import { initialQuotesState } from './models/quotes-state.initial';
import { quotesSlice } from './quotes.slice';

describe('Quotes Slice', () => {
  describe('getQuotes', () => {
    it('should set fetch status loading', () => {
      const action = quotesSlice.actions.getQuotes(mockGetQuotesPayload);
      const state = quotesSlice.reducer(initialQuotesState, action);
      expect(state.fetchStatus).toEqual(FetchStatus.Loading);
    });
  });

  describe('getQuotesSuccess', () => {
    const quotes = [mockQuotePerLeg];
    it('should set outbound quotes', () => {
      const action = quotesSlice.actions.getQuotesSuccess({
        quotes,
        isOutbound: true,
      });
      const state = quotesSlice.reducer(initialQuotesState, action);
      expect(state.fetchStatus).toEqual(FetchStatus.Success);
      expect(state.quotes.outbound).toEqual(quotes);
      expect(state.quotes.inbound).toEqual(undefined);
    });

    it('should set inbound quotes', () => {
      const action = quotesSlice.actions.getQuotesSuccess({
        quotes,
        isOutbound: false,
      });
      const state = quotesSlice.reducer(initialQuotesState, action);
      expect(state.fetchStatus).toEqual(FetchStatus.Success);
      expect(state.quotes.inbound).toEqual(quotes);
      expect(state.quotes.outbound).toEqual(undefined);
    });
  });

  describe('getQuotesError', () => {
    it('should set fetch status error', () => {
      const action = quotesSlice.actions.getQuotesError();
      const state = quotesSlice.reducer(initialQuotesState, action);
      expect(state.fetchStatus).toEqual(FetchStatus.Error);
    });
  });
});
