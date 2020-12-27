import { WlaSearchForm } from '@white-label-airline/models/search-form';
import { WlaSelectedQuotes } from '@white-label-airline/models/selected-quotes';

export interface SelectedQuotesSummaryProps {
  selectedQuotes: WlaSelectedQuotes;
  searchForm: WlaSearchForm;
  currency: string;
  language: string;
}
