import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import { rootReducer } from './root.reducer';
import { RootStateInterface } from './root-state.interface';
import { rootEpic } from './root.epic';

const epicMiddleware = createEpicMiddleware();

export function configureAppStore(preloadedState?: RootStateInterface) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware, logger],
    preloadedState,
    devTools: true,
  });

  epicMiddleware.run(rootEpic);

  return store;
}
