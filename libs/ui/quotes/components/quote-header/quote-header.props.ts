import { WlaQuotePerLeg } from '@white-label-airline/models/quotes';

export interface QuoteHeaderProps {
  quote: WlaQuotePerLeg;
  currency: string;
  language: string;
  buttonClick: (quote: WlaQuotePerLeg) => void;
}
