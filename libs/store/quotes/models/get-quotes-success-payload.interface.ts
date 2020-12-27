import { WlaQuotePerLeg } from '@white-label-airline/models/quotes';

export interface GetQuotesSuccessPayload {
  quotes: WlaQuotePerLeg[];
  isOutbound: boolean;
}
