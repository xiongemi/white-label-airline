import { WlaLeg } from './leg.interface';

export interface WlaQuoteResponse {
  QuoteId: number;
  MinPrice: number;
  Direct: boolean;
  OutboundLeg: WlaLeg;
  InboundLeg?: WlaLeg;
  QuoteDateTime: string; // date in format like '2018-03-08T04:54:00'
}
