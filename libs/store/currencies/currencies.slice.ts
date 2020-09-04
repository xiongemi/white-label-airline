import { createSlice } from '@reduxjs/toolkit';

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: [],
  reducers: {
    getCurrencies(state) {
      state = [];
    },
    getCurrenciesSuccess(_, action) {
      return action.payload;
    },
  },
});
