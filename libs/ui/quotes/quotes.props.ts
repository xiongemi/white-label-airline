import {
  WlaQuotePerLeg,
  WlaQuotePerTrip,
} from '@white-label-airline/models/quotes';
import { WlaSearchForm } from '@white-label-airline/models/search-form';
import { FetchStatus } from '@white-label-airline/store/models';
import { GetQuotesPayload } from '@white-label-airline/store/quotes';

interface QuotesProps {
  searchForm: WlaSearchForm;
  quotes: WlaQuotePerTrip;
  quotesFetchStatus: FetchStatus;
  isOutbound: boolean;
  getQuotes: (getQuotesPayload: GetQuotesPayload) => void;
  selectOutboundQuote: (quote: WlaQuotePerLeg) => void;
  selectInboundQuote: (quote: WlaQuotePerLeg) => void;
  modifySearch?: () => void;
}

export { QuotesProps };
