import { WlaPlacePerQuote } from './place-per-quote.interface';

export interface WlaQuotePerLeg {
  id: number;
  minPrice: number;
  direct: boolean;
  carriers: string[];
  origin: WlaPlacePerQuote;
  destination: WlaPlacePerQuote;
  showDetails?: boolean;
}
