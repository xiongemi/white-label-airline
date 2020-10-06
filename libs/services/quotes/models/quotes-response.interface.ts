import { CurrencyInterface } from '../../currencies';

import { QuoteResponseInterface } from './quote-response.interface';
import { CarrierInterface } from './carrier.interface';
import { PlacePerQuoteInterface } from './place-per-quote.interface';

export interface QuotesResponseInterface {
  Quotes: QuoteResponseInterface[];
  Places: PlacePerQuoteInterface[];
  Carriers: CarrierInterface[];
  Currencies: CurrencyInterface[];
}
