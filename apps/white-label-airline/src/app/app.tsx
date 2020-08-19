import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';

import { configureAppStore } from '@white-label-airline/store';

export const App = () => {
  return (
    <Provider store={configureAppStore()}>
      <Routes />
    </Provider>
  );
};

export default App;
