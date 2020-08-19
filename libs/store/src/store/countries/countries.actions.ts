import { createAction } from '@reduxjs/toolkit';
import { CountryResponse } from '../../api/countries/countriy-responose.interface';

export const getCountriesAction = createAction('GET_COUNTRIES');

export const getCountriesSuccessAction = createAction(
  'GET_COUNTRIES_SUCCESS',
  (countries: CountryResponse[]) => {
    return { payload: { countries } };
  }
);

export const getCountriesErrorAction = createAction(
  'GET_COUNTRIES_ERROR',
  (error) => {
    return { payload: { error } };
  }
);
