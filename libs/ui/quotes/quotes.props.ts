import { Dispatch } from '@reduxjs/toolkit';
import { WlaQuotePerLeg } from '@white-label-airline/services/quotes';
import {
  WlaRootState,
  quotesSelectors,
  quotesSlice,
  GetQuotesPayload,
  selectedQuotesSlice,
} from '@white-label-airline/store';

import { QuotesQueryParams } from '../models/quotes-query-params.interface';

export const mapStateToProps = (state: WlaRootState) => {
  return {
    quotes: quotesSelectors.getQuotes(state),
    quotesFetchStatus: quotesSelectors.getQuotesFetchStatus(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getQuotes(getQuotesPayload: GetQuotesPayload) {
      dispatch(quotesSlice.actions.getQuotes(getQuotesPayload));
    },
    selectOutboundQuote(quote: WlaQuotePerLeg) {
      dispatch(selectedQuotesSlice.actions.selectOutboundQuote(quote));
    },
    selectInboundQuote(quote: WlaQuotePerLeg) {
      dispatch(selectedQuotesSlice.actions.selectInboundQuote(quote));
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type QuotesProps = mapStateToPropsType &
  mapDispatchToPropsType & {
    queryParams: QuotesQueryParams;
    modifySearch?: () => void;
    isOutbound: boolean;
    selectQuote: (quote: WlaQuotePerLeg) => void;
  };
