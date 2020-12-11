import { WlaCurrency } from '../../currencies';

import { WlaCarrier } from './carrier.interface';
import { WlaPlacePerQuote } from './place-per-quote.interface';
import { WlaQuoteResponse } from './quote-response.interface';

export interface WlaQuotesResponse {
  Quotes: WlaQuoteResponse[];
  Places: WlaPlacePerQuote[];
  Carriers: WlaCarrier[];
  Currencies: WlaCurrency[];
}
