import { CurrencyInterface } from '../../currencies';

import { WlaCarrier } from './carrier.interface';
import { WlaPlacePerQuote } from './place-per-quote.interface';
import { QuoteResponseInterface } from './quote-response.interface';

export interface QuotesResponseInterface {
  Quotes: QuoteResponseInterface[];
  Places: WlaPlacePerQuote[];
  Carriers: WlaCarrier[];
  Currencies: CurrencyInterface[];
}
