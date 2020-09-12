import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import { configureAppStore } from '@white-label-airline/store';
import { setI18n } from '@white-label-airline/services/i18n';

import Routes from './routes';

setI18n('/assets/i18n/{{lng}}.json');

export const App = () => {
  return (
    <Provider store={configureAppStore()}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </Provider>
  );
};

export default App;
