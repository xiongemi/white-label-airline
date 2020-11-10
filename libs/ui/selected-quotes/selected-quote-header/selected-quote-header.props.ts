import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

export interface SelectedQuoteHeaderProps {
  quote: QuotePerLegInterface;
  currency: string;
  language: string;
  date: Date;
  buttonClick: (quote: QuotePerLegInterface) => void;
}
