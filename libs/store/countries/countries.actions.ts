import { createAction } from '@reduxjs/toolkit';

export const getCountriesError = createAction(
  'countries/getCountriesError',
  (error) => {
    return { payload: { error } };
  }
);
