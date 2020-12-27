import { configureAppStore } from '@white-label-airline/store/root';
import { FeaturesProvider } from '@white-label-airline/ui/feature';
import Loading from '@white-label-airline/ui/loading';
import { createHashHistory, History } from 'history';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import MainContent from './components/main-content';
import { features } from './features.const';
import { appInitI18n } from './i18n';

const history: History = createHashHistory();

const { store, persistor } = configureAppStore(history);

appInitI18n();

export const App: React.FunctionComponent = () => {
  return (
    <Suspense fallback={<Loading />}>
      <FeaturesProvider value={features}>
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <MainContent history={history} />
          </PersistGate>
        </Provider>
      </FeaturesProvider>
    </Suspense>
  );
};

export default App;
