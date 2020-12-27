import { WlaTripType } from '@white-label-airline/models/search-form';

export interface GetQuotesPayload {
  country: string;
  currency: string;
  from: string;
  to: string;
  departDate: string; // date in 'yyyy-MM-dd'
  returnDate?: string; // date in 'yyyy-MM-dd'
  isOutbound?: boolean;
  tripType: WlaTripType;
}
