import * as Yup from 'yup';
import { SearchForm, SearchTripType } from './search-form.interface';

export const initSearchForm: SearchForm = {
  tripType: SearchTripType.oneWay,
  locale: null,
  currency: null,
  from: {
    country: null,
    place: null,
    date: null,
  },
  to: {
    country: null,
    place: null,
    date: null,
  },
};

export const searchFormSchema = Yup.object().shape({
  tripType: Yup.number().required(),
  locale: Yup.string().required(),
  currency: Yup.object().required(),
  from: Yup.object().shape({
    country: Yup.object().required(),
    place: Yup.object().required(),
    date: Yup.date().required(),
  }),
  to: Yup.object().shape({
    country: Yup.object().required(),
    place: Yup.object().required(),
    date: Yup.date(),
  }),
});
