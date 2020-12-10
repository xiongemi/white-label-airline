import { WlaQuotePerLeg } from '@white-label-airline/services/quotes';

export interface WlaSelectedQuotesState {
  outbound: WlaQuotePerLeg;
  inbound?: WlaQuotePerLeg;
}
