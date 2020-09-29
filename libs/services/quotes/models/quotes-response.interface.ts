import { PlaceInterface } from '../../places';
import { CurrencyInterface } from '../../currencies';

import { QuoteInterface } from './quote.interface';
import { CarrierInterface } from './carrier.interface';

export interface QuotesResponseInterface {
  Quotes: QuoteInterface[];
  Places: PlaceInterface[];
  Carriers: CarrierInterface[];
  Currencies: CurrencyInterface[];
}
