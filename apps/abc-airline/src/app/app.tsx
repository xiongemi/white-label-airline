import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import { configureAppStore } from '@white-label-airline/store';
import { initI18n } from '@white-label-airline/services/i18n';
import { FeatureToggleProvider } from 'react-feature-toggles';
import { Container, Box, ThemeProvider } from '@material-ui/core';
import Loading from '@white-label-airline/ui/loading';
import Header from '@white-label-airline/ui/header';
import WhiteLabelRoutes from '@white-label-airline/ui/white-label-routes';

import { initSearchForm } from '../models/search-form-init.const';
import { features } from './features.const';
import { theme } from './theme';

initI18n('./assets/i18n/{{lng}}.json', 'zh-CN');

export const App: React.FunctionComponent = () => {
  return (
    <FeatureToggleProvider featureToggleList={features}>
      <Provider store={configureAppStore()}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<Loading />}>
            <Header />
            <Box mt={3} component={Container}>
              <WhiteLabelRoutes initSearchForm={initSearchForm} />
            </Box>
          </Suspense>
        </ThemeProvider>
      </Provider>
    </FeatureToggleProvider>
  );
};

export default App;
