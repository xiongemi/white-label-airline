import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

export interface QuoteProps {
  quote: QuotePerLegInterface;
  currency: string;
  language: string;
  date?: Date;
  selectQuote?: (quote: QuotePerLegInterface) => void;
  headerButtonText: string;
  headerButtonClick?: (quote: QuotePerLegInterface) => void;
}
