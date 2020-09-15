import * as Yup from 'yup';

export const searchFormSchema = Yup.object().shape({
  tripType: Yup.number().required(),
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
