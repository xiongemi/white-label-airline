import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {
    handleError(_, action) {
      return action.payload;
    },
    clearError() {
      return null;
    },
  },
});
