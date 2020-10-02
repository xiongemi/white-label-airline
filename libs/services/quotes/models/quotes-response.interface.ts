import { PlaceInterface } from '../../places';
import { CurrencyInterface } from '../../currencies';

import { QuoteResponseInterface } from './quote-response.interface';
import { CarrierInterface } from './carrier.interface';

export interface QuotesResponseInterface {
  Quotes: QuoteResponseInterface[];
  Places: PlaceInterface[];
  Carriers: CarrierInterface[];
  Currencies: CurrencyInterface[];
}
