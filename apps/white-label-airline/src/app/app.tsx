import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import { configureAppStore } from '@white-label-airline/store';
import { initI18n } from '@white-label-airline/services/i18n';
import { FeatureToggleProvider } from 'react-feature-toggles';
import { Container, Box } from '@material-ui/core';
import Loading from '@white-label-airline/ui/loading';
import Header from '@white-label-airline/ui/header';

import Routes from './routes';
import { features } from './features.const';

const defaultLanguage = 'en-GB';
const supportedLanguages = [defaultLanguage, 'zh-CN'];

initI18n('./assets/i18n/{{lng}}.json', defaultLanguage, supportedLanguages);

export const App: React.FunctionComponent = () => {
  return (
    <Suspense fallback={Loading}>
      <FeatureToggleProvider featureToggleList={features}>
        <Provider store={configureAppStore()}>
          <Header />
          <Box mt={3} component={Container}>
            <Routes />
          </Box>
        </Provider>
      </FeatureToggleProvider>
    </Suspense>
  );
};

export default App;
