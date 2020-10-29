import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import { History } from 'history';

import { createRootReducer } from './root.reducer';
import { RootStateInterface } from './root-state.interface';
import { rootEpic } from './root.epic';

const epicMiddleware = createEpicMiddleware();
const isProduction = process.env.NODE_ENV === 'production';

export function configureAppStore(
  history: History,
  preloadedState?: RootStateInterface
) {
  const store = configureStore({
    reducer: createRootReducer(history),
    middleware: isProduction ? [epicMiddleware] : [epicMiddleware, logger],
    preloadedState,
    devTools: !isProduction,
  });

  epicMiddleware.run(rootEpic);

  return store;
}
