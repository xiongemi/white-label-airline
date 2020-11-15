import { TripTypeEnum } from '@white-label-airline/store';

export interface GetQuotesPayload {
  country: string;
  currency: string;
  from: string;
  to: string;
  departDate: string; // date in 'yyyy-MM-dd'
  returnDate?: string; // date in 'yyyy-MM-dd'
  isOutbound?: boolean;
  tripType: TripTypeEnum;
}
