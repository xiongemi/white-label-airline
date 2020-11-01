import { createSlice } from '@reduxjs/toolkit';

import { defaultSearchForm } from './search-form-default.const';

export const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState: defaultSearchForm,
  reducers: {
    setSearchFormValues(state, action) {
      state = action.payload;
    },
    resetSearchFormValues(state) {
      state = defaultSearchForm;
    },
  },
});
