import { WlaSearchForm } from '@white-label-airline/models/search-form';
import { WlaSelectedQuotes } from '@white-label-airline/models/selected-quotes';
interface SelectedQuotesProps {
  modifyOutboundQuote: () => void;
  modifyInboundQuote: () => void;
  searchForm: WlaSearchForm;
  selectedQuotes: WlaSelectedQuotes;
  language: string;
}

export { SelectedQuotesProps };
