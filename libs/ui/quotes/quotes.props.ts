import {
  WlaQuotePerLeg,
  WlaQuotePerTrip,
} from '@white-label-airline/models/quotes';
import { WlaSearchForm } from '@white-label-airline/models/search-form';

interface QuotesProps {
  searchForm: WlaSearchForm;
  quotes: WlaQuotePerTrip;
  isOutbound: boolean;
  selectOutboundQuote: (quote: WlaQuotePerLeg) => void;
  selectInboundQuote: (quote: WlaQuotePerLeg) => void;
  modifySearch?: () => void;
  language: string;
}

export { QuotesProps };
