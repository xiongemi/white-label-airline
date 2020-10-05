import * as yup from 'yup';

import { TripTypeEnum } from './trip-type.enum';

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
    .oneOf([TripTypeEnum.OneWay, TripTypeEnum.RoundTrip])
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
    .when('tripType', {
      is: TripTypeEnum.RoundTrip,
      then: yup.date().required('messages.required'),
    }),
});
