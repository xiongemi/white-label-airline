import { createSlice } from '@reduxjs/toolkit';

export const apiSlice = createSlice({
  name: 'api',
  initialState: null,
  reducers: {
    setApiKey(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setApiKey } = apiSlice.actions;
