import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

export interface SelectedQuotesStateInterface {
  outbound: QuotePerLegInterface;
  inbound?: QuotePerLegInterface;
}
