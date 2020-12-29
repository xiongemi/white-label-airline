import { WlaSearchForm } from './search-form.interface';
import { WlaTripType } from './trip-type.enum';

export const mockSearchForm: WlaSearchForm = {
  country: { code: 'CA', name: 'Canada' },
  tripType: WlaTripType.RoundTrip,
  currency: {
    code: 'CAD',
  },
  from: {
    id: 'YTOA-sky',
    name: 'Toronto',
  },
  departDate: new Date('2020-11-24T03:19:00.000Z'),
  to: {
    id: 'NYCA-sky',
    name: 'New York',
  },
  returnDate: new Date('2020-11-29T03:19:00.000Z'),
};
