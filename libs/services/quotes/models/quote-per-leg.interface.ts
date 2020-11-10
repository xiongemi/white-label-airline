import { PlacePerQuoteInterface } from './place-per-quote.interface';

export interface QuotePerLegInterface {
  id: number;
  minPrice: number;
  direct: boolean;
  carriers: string[];
  origin: PlacePerQuoteInterface;
  destination: PlacePerQuoteInterface;
  showDetails?: boolean;
}
