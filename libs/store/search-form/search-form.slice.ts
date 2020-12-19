import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WlaSearchForm } from './models/search-form.interface';

export const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState: null,
  reducers: {
    setSearchFormValues(_, action: PayloadAction<WlaSearchForm>) {
      return action.payload;
    },
    resetSearchFormValues() {
      return null;
    },
  },
});
