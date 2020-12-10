import { configureStore } from '@reduxjs/toolkit';
import { History } from 'history';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session'; // defaults to localStorage for web

import { WlaRootState } from './models/root-state.interface';
import { rootEpic } from './root.epic';
import { createRootReducer } from './root.reducer';

const epicMiddleware = createEpicMiddleware();
const isDevelopment = process.env.NODE_ENV === 'development';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['searchForm', 'selectedQuotes'],
};

export function configureAppStore(
  history: History,
  preloadedState?: WlaRootState
) {
  const store = configureStore({
    reducer: persistReducer(persistConfig, createRootReducer(history)),
    middleware: isDevelopment ? [epicMiddleware, logger] : [epicMiddleware],
    preloadedState,
    devTools: isDevelopment,
  });

  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store);

  return { store, persistor };
}
