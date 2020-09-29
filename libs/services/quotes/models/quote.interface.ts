import { Leg } from './leg.interface';

export interface QuoteInterface {
  QuoteId: number;
  MinPrice: number;
  Direct: boolean;
  OutboundLeg: Leg;
  InboundLeg: Leg;
  QuoteDateTime: string; // date in format like '2018-03-08T04:54:00'
}
