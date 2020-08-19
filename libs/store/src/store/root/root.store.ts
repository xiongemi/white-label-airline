import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import { rootReducer } from './root.reducer';
import { RootState } from './root-state.interface';

const epicMiddleware = createEpicMiddleware();

export function configureAppStore(preloadedState?: RootState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware, logger],
    preloadedState,
    devTools: true,
  });

  return store;
}
