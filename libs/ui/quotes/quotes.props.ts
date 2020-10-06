import {
  RootStateInterface,
  quotesSelectors,
  languageSelectors,
  quotesSlice,
  GetQuotesPayload,
} from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';
import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

export const mapStateToProps = (state: RootStateInterface) => {
  return {
    quotes: quotesSelectors.getQuotes(state),
    language: languageSelectors.getLanguage(state),
    quotesFetchStatus: quotesSelectors.getQuotesFetchStatus(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getQuotes(getQuotesPayload: GetQuotesPayload) {
      dispatch(quotesSlice.actions.getQuotes(getQuotesPayload));
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type QuotesProps = mapStateToPropsType &
  mapDispatchToPropsType & {
    getQuotesPayload: GetQuotesPayload;
    modifySearch?: () => void;
    isOutbound: boolean;
    selectQuote: (quote: QuotePerLegInterface) => void;
  };
