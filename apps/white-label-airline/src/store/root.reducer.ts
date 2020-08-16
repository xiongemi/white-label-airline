import { combineReducers } from '@reduxjs/toolkit';
import { searchSlice } from '../pages/search/search.slice';

export const rootReducer = combineReducers({
  search: searchSlice.reducer,
});
