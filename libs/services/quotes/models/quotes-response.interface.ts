import { CurrencyInterface } from '../../currencies';

import { CarrierInterface } from './carrier.interface';
import { PlacePerQuoteInterface } from './place-per-quote.interface';
import { QuoteResponseInterface } from './quote-response.interface';

export interface QuotesResponseInterface {
  Quotes: QuoteResponseInterface[];
  Places: PlacePerQuoteInterface[];
  Carriers: CarrierInterface[];
  Currencies: CurrencyInterface[];
}
