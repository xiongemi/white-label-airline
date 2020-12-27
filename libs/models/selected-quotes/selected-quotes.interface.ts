import { WlaQuotePerLeg } from '../quotes';

export interface WlaSelectedQuotes {
  outbound: WlaQuotePerLeg;
  inbound?: WlaQuotePerLeg;
}
