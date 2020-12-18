import { WlaSelectedQuotesState } from '@white-label-airline/store/selected-quotes';
import { QuotesQueryParams } from '@white-label-airline/ui/models/quotes-query-params.interface';

export interface SelectedQuotesSummaryProps {
  selectedQuotes: WlaSelectedQuotesState;
  queryParams: QuotesQueryParams;
  currency: string;
  language: string;
}
