import { TripTypeEnum } from '@white-label-airline/ui/search-form';

export interface QuotesQueryParams {
  country: string;
  currency: string;
  from: string;
  to: string;
  departDate: string; // date in 'yyyy-MM-dd'
  returnDate?: string; // date in 'yyyy-MM-dd'
  tripType: TripTypeEnum;
}
