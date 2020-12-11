import { FetchStatus } from '../models/fetch-status.enum';
import { mockInitialRootState } from '../root/models/root-state.mock';

import { quotesSelectors } from './quotes.selectors';

describe('Quotes Selectors', () => {
  describe('initial state', () => {
    it('should return quotes', () => {
      const actual = quotesSelectors.getQuotes(mockInitialRootState);
      const expected = {};

      expect(actual).toEqual(expected);
    });

    it('should return quotes fetch status', () => {
      const actual = quotesSelectors.getQuotesFetchStatus(mockInitialRootState);
      const expected = FetchStatus.Initial;

      expect(actual).toEqual(expected);
    });

    it('should return quotes fetch status', () => {
      const actual = quotesSelectors.getQuotesFetchStatus(mockInitialRootState);
      const expected = FetchStatus.Initial;

      expect(actual).toEqual(expected);
    });

    it('should return outbound quotes', () => {
      const actual = quotesSelectors.getOutboundQuotes(mockInitialRootState);
      const expected = undefined;

      expect(actual).toEqual(expected);
    });

    it('should return inbound quotes', () => {
      const actual = quotesSelectors.getInboundQuotes(mockInitialRootState);
      const expected = undefined;

      expect(actual).toEqual(expected);
    });
  });
});
