import { WlaQuotePerLeg } from '@white-label-airline/services/quotes';

export interface GetQuotesSuccessPayload {
  quotes: WlaQuotePerLeg[];
  isOutbound: boolean;
}
