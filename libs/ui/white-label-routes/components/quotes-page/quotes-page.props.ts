import { Dispatch } from '@reduxjs/toolkit';
import { WlaQuotePerLeg } from '@white-label-airline/models/quotes';
import {
  quotesSelectors,
  quotesSlice,
  GetQuotesPayload,
} from '@white-label-airline/store/quotes';
import { WlaRootState } from '@white-label-airline/store/root';
import { searchFormSelectors } from '@white-label-airline/store/search-form';
import {
  selectedQuotesSelectors,
  selectedQuotesSlice,
} from '@white-label-airline/store/selected-quotes';

const mapStateToProps = (state: WlaRootState) => {
  return {
    searchForm: searchFormSelectors.getSearchFormValues(state),
    quotes: quotesSelectors.getQuotes(state),
    quotesFetchStatus: quotesSelectors.getQuotesFetchStatus(state),
    selectedQuotes: selectedQuotesSelectors.getSelectedQuotesState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
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

type QuotesPageProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps, QuotesPageProps };
