import { Container, Box } from '@material-ui/core';
import { initI18n } from '@white-label-airline/services/i18n';
import { configureAppStore } from '@white-label-airline/store/root';
import ErrorSnackbar from '@white-label-airline/ui/error-snackbar';
import { FeaturesProvider } from '@white-label-airline/ui/feature';
import Header from '@white-label-airline/ui/header';
import Loading from '@white-label-airline/ui/loading';
import WhiteLabelRoutes from '@white-label-airline/ui/white-label-routes';
import { createHashHistory, History } from 'history';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import logo from '../assets/images/logo.png';
import { useLocale } from '../hooks/use-locale.hook';
import { initSearchForm } from '../models/search-form-init.const';

import { features } from './features.const';

const defaultLanguage = 'en-GB';
const supportedLanguages = [defaultLanguage, 'zh-CN'];

initI18n('./assets/i18n/{{lng}}.json', defaultLanguage);
const history: History = createHashHistory();

const { store, persistor } = configureAppStore(history);

export const App: React.FunctionComponent = () => {
  const { dateLocale } = useLocale();

  return (
    <Suspense fallback={<Loading />}>
      <FeaturesProvider value={features}>
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <Header
              logoImage={logo}
              supportedLanguages={supportedLanguages}
              defaultLanguage={defaultLanguage}
            />
            <Box mt={3} component={Container}>
              <WhiteLabelRoutes
                initSearchForm={initSearchForm}
                history={history}
                locale={dateLocale}
              />
            </Box>
            <ErrorSnackbar />
          </PersistGate>
        </Provider>
      </FeaturesProvider>
    </Suspense>
  );
};

export default App;
