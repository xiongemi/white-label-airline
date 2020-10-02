import {
  QuoteInterface,
  CarrierInterface,
} from '@white-label-airline/services/quotes';

export interface QuoteProps {
  quote: QuoteInterface;
  carriers: CarrierInterface;
}
