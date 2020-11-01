import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session'; // defaults to localStorage for web
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import { History } from 'history';

import { createRootReducer } from './root.reducer';
import { RootStateInterface } from './root-state.interface';
import { rootEpic } from './root.epic';

const epicMiddleware = createEpicMiddleware();
const isProduction = process.env.NODE_ENV === 'production';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
};

export function configureAppStore(
  history: History,
  preloadedState?: RootStateInterface
) {
  const store = configureStore({
    reducer: persistReducer(persistConfig, createRootReducer(history)),
    middleware: isProduction ? [epicMiddleware] : [epicMiddleware, logger],
    preloadedState,
    devTools: !isProduction,
  });

  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store);

  return { store, persistor };
}
