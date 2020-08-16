import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    countries: [],
  },
  reducers: {
    getCountriesSuccess: (state, action) => {
      const { countries } = action.payload;
      state = { ...state, countries };
    },
  },
});
