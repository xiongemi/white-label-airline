import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import { configureAppStore } from '@white-label-airline/store';
import { setI18n } from '@white-label-airline/services/i18n';
import { FeatureToggleProvider } from 'react-feature-toggles';

import Routes from './routes';
import { features } from './features.const';

setI18n('/assets/i18n/{{lng}}.json');

export const App = () => {
  return (
    <FeatureToggleProvider featureToggleList={features}>
      <Provider store={configureAppStore()}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </Provider>
    </FeatureToggleProvider>
  );
};

export default App;
