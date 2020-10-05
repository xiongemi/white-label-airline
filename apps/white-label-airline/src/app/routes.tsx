import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';

import SearchPage from '../pages/search/search-page';
import QuotesPage from '../pages/quotes/quotes-page';

export const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <CacheSwitch>
        <Route path="/quotes">
          <QuotesPage />
        </Route>
        <CacheRoute path="/search">
          <SearchPage />
        </CacheRoute>
      </CacheSwitch>
    </Router>
  );
};

export default Routes;
