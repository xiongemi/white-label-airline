import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserById = createAsyncThunk(
  'SEARCH--GET_COUNTRIES',
  async () => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

export const getCountries = createAction('SEARCH--GET_COUNTRIES');
export const getCountriesSuccess = createAction(
  'SEARCH--GET_COUNTRIES_SUCCESS',
  (countries) => {
    return {
      payload: { countries },
    };
  }
);
