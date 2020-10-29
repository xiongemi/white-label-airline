import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

export interface QuoteHeaderProps {
  quote: QuotePerLegInterface;
  currency: string;
  language: string;
  buttonText: string;
  buttonClick: (quote: QuotePerLegInterface) => void;
}
