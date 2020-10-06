import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

export interface QuotesListProps {
  quotes: QuotePerLegInterface[];
  currency: string;
  language: string;
  selectQuote: (quote: QuotePerLegInterface) => void;
  modifySearch?: () => void;
}
