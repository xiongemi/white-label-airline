import {
  WlaSearchForm,
  WlaTripType,
} from '@white-label-airline/models/search-form';

export const initSearchForm: WlaSearchForm = {
  country: { code: 'CA', name: 'Canada' },
  tripType: WlaTripType.RoundTrip,
  currency: {
    code: 'CNY',
  },
  from: undefined,
  departDate: new Date(),
  to: undefined,
  returnDate: undefined,
};
