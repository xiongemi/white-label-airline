import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import { configureAppStore } from '@white-label-airline/store';
import { initI18n } from '@white-label-airline/services/i18n';
import { FeatureToggleProvider } from 'react-feature-toggles';
import { createBrowserHistory, History } from 'history';
import { Container, Box } from '@material-ui/core';
import Loading from '@white-label-airline/ui/loading';
import Header from '@white-label-airline/ui/header';
import WhiteLabelRoutes from '@white-label-airline/ui/white-label-routes';

import { initSearchForm } from '../models/search-form-init.const';

import { features } from './features.const';

const defaultLanguage = 'en-GB';
const supportedLanguages = [defaultLanguage, 'zh-CN'];

initI18n('./assets/i18n/{{lng}}.json', defaultLanguage, supportedLanguages);
const history: History = createBrowserHistory({
  basename: process.env.NX_BASE_HREF,
});

export const App: React.FunctionComponent = () => {
  return (
    <Suspense fallback={Loading}>
      <FeatureToggleProvider featureToggleList={features}>
        <Provider store={configureAppStore(history)}>
          <Header />
          <Box mt={3} component={Container}>
            <WhiteLabelRoutes
              initSearchForm={initSearchForm}
              history={history}
            />
          </Box>
        </Provider>
      </FeatureToggleProvider>
    </Suspense>
  );
};

export default App;
