import { QuotePerLegInterface } from './quote-per-leg.interface';

export interface QuotesPerTripInterface {
  outbound?: QuotePerLegInterface[];
  inbound?: QuotePerLegInterface[];
}
