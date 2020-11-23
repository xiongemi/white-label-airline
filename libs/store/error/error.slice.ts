import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {
    handleError(_, action: PayloadAction<string | Error>) {
      return action.payload;
    },
    clearError() {
      return null;
    },
  },
});
