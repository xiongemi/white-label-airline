import {
  WlaSearchForm,
  WlaTripType,
} from '@white-label-airline/models/search-form';

export const initSearchForm: WlaSearchForm = {
  country: { code: 'CA', name: 'Canada' },
  tripType: WlaTripType.RoundTrip,
  currency: {
    code: 'CAD',
  },
  from: null,
  departDate: new Date(),
  to: null,
  returnDate: null,
};
