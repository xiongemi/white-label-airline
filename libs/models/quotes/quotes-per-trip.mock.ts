import { mockQuotePerLeg } from './quote-per-leg.mock';
import { WlaQuotePerTrip } from './quotes-per-trip.interface';

export const mockQuotesPerTrip: WlaQuotePerTrip = {
  outbound: [mockQuotePerLeg],
};
