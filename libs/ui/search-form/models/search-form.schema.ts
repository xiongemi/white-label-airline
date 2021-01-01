import { WlaTripType } from '@white-label-airline/models/search-form';
import * as yup from 'yup';

export const searchFormSchema = yup.object().shape({
  country: yup
    .object()
    .nullable()
    .required('messages.required')
    .typeError('messages.required'),
  tripType: yup
    .string()
    .nullable()
    .required('messages.required')
    .oneOf([WlaTripType.OneWay, WlaTripType.RoundTrip])
    .typeError('messages.required'),
  currency: yup
    .object()
    .nullable()
    .required('messages.required')
    .typeError('messages.required'),
  from: yup
    .object()
    .nullable()
    .required('messages.required')
    .typeError('messages.required'),
  departDate: yup.date().required('messages.required'),
  to: yup
    .object()
    .nullable()
    .required('messages.required')
    .typeError('messages.required'),
  returnDate: yup
    .date()
    .nullable()
    .min(yup.ref('departDate'), 'messages.minDate')
    .when('tripType', {
      is: WlaTripType.RoundTrip,
      then: yup.date().required('messages.required'),
    }),
});
