import { createSlice } from '@reduxjs/toolkit';

import { initialSearchForm } from './search-form-initial.const';

export const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState: initialSearchForm,
  reducers: {
    setSearchForm(_, action) {
      return action.payload;
    },
    resetSearchForm() {
      return initialSearchForm;
    },
  },
});
