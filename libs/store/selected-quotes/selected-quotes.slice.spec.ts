import { mockQuotePerLeg } from '@white-label-airline/services/quotes';

import { initialSelectedQuotesState } from './selected-quotes-state-initial.const';
import { selectedQuotesSlice } from './selected-quotes.slice';

describe('Selected Quotes Slice', () => {
  it('should select outbound quote', () => {
    const action = selectedQuotesSlice.actions.selectOutboundQuote(
      mockQuotePerLeg
    );
    const state = selectedQuotesSlice.reducer(
      initialSelectedQuotesState,
      action
    );
    const expected = {
      outbound: mockQuotePerLeg,
    };
    expect(state).toEqual(expected);
  });

  it('should select inbound quote', () => {
    const action = selectedQuotesSlice.actions.selectInboundQuote(
      mockQuotePerLeg
    );
    const state = selectedQuotesSlice.reducer(
      initialSelectedQuotesState,
      action
    );
    const expected = {
      outbound: null,
      inbound: mockQuotePerLeg,
    };
    expect(state).toEqual(expected);
  });

  it('should reset state', () => {
    const action = selectedQuotesSlice.actions.reset();
    const state = selectedQuotesSlice.reducer(
      {
        outbound: mockQuotePerLeg,
        inbound: mockQuotePerLeg,
      },
      action
    );
    expect(state).toEqual(initialSelectedQuotesState);
  });
});
