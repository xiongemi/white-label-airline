import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

export interface GetQuotesSuccessPayload {
  quotes: QuotePerLegInterface[];
  isOutbound: boolean;
}
