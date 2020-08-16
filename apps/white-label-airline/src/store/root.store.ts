import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root.reducer';

const rootStore = configureStore({
  reducer: rootReducer,
});
