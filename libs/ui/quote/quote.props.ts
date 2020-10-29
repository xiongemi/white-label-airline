import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

export interface QuoteProps {
  quote: QuotePerLegInterface;
  currency: string;
  language: string;
  selectQuote?: (quote: QuotePerLegInterface) => void;
  headerButtonText: string;
  headerButtonClick?: (quote: QuotePerLegInterface) => void;
}
