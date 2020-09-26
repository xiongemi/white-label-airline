import * as yup from 'yup';

import { TripTypeEnum } from './trip-type.enum';
import { SearchFormInterface } from './search-form.interface';

export const getSearchFormSchema = () =>
  yup.lazy((values: SearchFormInterface) => {
    const tripType = values.tripType;

    return yup.object().shape({
      country: yup.object().nullable().required('messages.required'),
      tripType: yup.string().nullable().required('messages.required'),
      currency: yup.object().nullable().required('messages.required'),
      from: yup.object().shape({
        place: yup.object().nullable().required('messages.required'),
        date: yup
          .date()
          .nullable()
          .required('messages.required')
          .min(new Date()),
      }),
      to: yup.object().shape({
        place: yup.object().nullable().required('messages.required'),
        date:
          tripType === TripTypeEnum.RoundTrip
            ? yup
                .date()
                .nullable()
                .required('messages.required')
                .min(yup.ref('from.date'))
            : undefined,
      }),
    });
  });
