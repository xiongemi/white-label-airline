import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: 'en-GB',
  reducers: {
    setLanguage(state, action) {
      state = action.payload;
    },
  },
});
