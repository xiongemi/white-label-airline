import { WlaQuotePerLeg } from './quote-per-leg.interface';

export interface WlaQuotePerTrip {
  outbound?: WlaQuotePerLeg[];
  inbound?: WlaQuotePerLeg[];
}
