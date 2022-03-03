import { CurrencyResponse } from '../../currencies/models/currency-response.interface';

import { CarrierResponse } from './carrier-response.interface';
import { PlacePerQuoteResponse } from './place-per-quote-response.interface';
import { QuoteResponse } from './quote-response.interface';

export interface QuotesResponse {
  Quotes: QuoteResponse[];
  Places: PlacePerQuoteResponse[];
  Carriers: CarrierResponse[];
  Currencies: CurrencyResponse[];
}
