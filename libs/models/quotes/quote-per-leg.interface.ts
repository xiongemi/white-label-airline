import { WlaPlacePerQuote } from '@white-label-airline/services/quotes';

export interface WlaQuotePerLeg {
  id: number;
  minPrice: number;
  direct: boolean;
  carriers: string[];
  origin: WlaPlacePerQuote;
  destination: WlaPlacePerQuote;
  showDetails?: boolean;
}
