import { WlaQuotePerLeg } from '@white-label-airline/services/quotes';

export interface QuoteHeaderProps {
  quote: WlaQuotePerLeg;
  currency: string;
  language: string;
  buttonClick: (quote: WlaQuotePerLeg) => void;
}
