import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: null,
  reducers: {
    setLanguage(_, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export { languageSlice };
