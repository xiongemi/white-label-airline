import { WlaQuotePerLeg } from '@white-label-airline/services/quotes';

export interface QuotesListProps {
  quotes: WlaQuotePerLeg[];
  currency: string;
  language: string;
  selectQuote: (quote: WlaQuotePerLeg) => void;
  modifySearch?: () => void;
}
