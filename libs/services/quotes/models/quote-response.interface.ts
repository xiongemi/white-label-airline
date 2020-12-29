import { LegResponse } from './leg-response.interface';

export interface QuoteResponse {
  QuoteId: number;
  MinPrice: number;
  Direct: boolean;
  OutboundLeg: LegResponse;
  InboundLeg?: LegResponse;
  QuoteDateTime: string; // date in format like '2018-03-08T04:54:00'
}
