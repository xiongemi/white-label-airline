import { createSlice } from '@reduxjs/toolkit';

export const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState: null,
  reducers: {
    setSearchFormValues(_, action) {
      return action.payload;
    },
    resetSearchFormValues(state) {
      state = null;
    },
  },
});
