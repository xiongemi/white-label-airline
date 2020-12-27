import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WlaSearchForm } from '@white-label-airline/models/search-form';

export const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState: null,
  reducers: {
    setSearchFormValues(
      _,
      action: PayloadAction<WlaSearchForm>
    ): WlaSearchForm {
      return action.payload;
    },
    resetSearchFormValues() {
      return null;
    },
  },
});
