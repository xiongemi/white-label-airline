import { WlaQuotePerLeg } from '@white-label-airline/models/quotes';

export interface SelectedQuoteHeaderProps {
  quote: WlaQuotePerLeg;
  currency: string;
  language: string;
  date: Date;
  buttonClick: (quote: WlaQuotePerLeg) => void;
  locale: Locale;
}
