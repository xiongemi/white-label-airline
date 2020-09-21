import * as yup from 'yup';

import { TripTypeEnum } from './trip-type.enum';
import { SearchFormInterface } from './search-form.interface';

export const getSearchFormSchema = () =>
  yup.lazy((values: SearchFormInterface) => {
    const tripType = values.tripType;
    return yup.object().shape({
      tripType: yup.string().required('messages.required'),
      currency: yup.object().nullable().required('messages.required'),
      from: yup.object().shape({
        place: yup.object().nullable().required('messages.required'),
        date: yup.date().nullable().required('messages.required'),
      }),
      to: yup.object().shape({
        place: yup.object().nullable().required('messages.required'),
        date:
          tripType === TripTypeEnum.RoundTrip
            ? yup.date().nullable().required('messages.required')
            : undefined,
      }),
    });
  });
