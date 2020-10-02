import { QuotePerLegInterface } from './quote-per-leg.interface';

export interface QuotesPerTrip {
  outbound?: QuotePerLegInterface[];
  inbound?: QuotePerLegInterface[];
}
