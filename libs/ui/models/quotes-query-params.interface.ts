import { TripTypeEnum } from '@white-label-airline/store';

export interface QuotesQueryParams {
  country: string;
  currency: string;
  from: string;
  to: string;
  departDate: string; // date in 'yyyy-MM-dd'
  returnDate?: string; // date in 'yyyy-MM-dd'
  tripType: TripTypeEnum;
}
