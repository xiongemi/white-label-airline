import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { changeLanguage } from '@white-label-airline/services/i18n';

const languageSlice = createSlice({
  name: 'language',
  initialState: null,
  reducers: {
    setLanguage(_, action: PayloadAction<string>) {
      changeLanguage(action.payload);
      return action.payload;
    },
  },
});

export { languageSlice };
