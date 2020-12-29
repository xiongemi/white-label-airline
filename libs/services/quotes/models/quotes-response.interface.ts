import { CurrencyResponse } from '@white-label-airline/services/currencies';

import { CarrierResponse } from './carrier-response.interface';
import { PlacePerQuoteResponse } from './place-per-quote-response.interface';
import { QuoteResponse } from './quote-response.interface';

export interface QuotesResponse {
  Quotes: QuoteResponse[];
  Places: PlacePerQuoteResponse[];
  Carriers: CarrierResponse[];
  Currencies: CurrencyResponse[];
}
