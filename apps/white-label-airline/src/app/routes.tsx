import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import SearchPage from '../pages/search/search-page';
import QuotesPage from '../pages/quotes/quotes-page';

export const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/quotes">
          <QuotesPage />
        </Route>
        <Route path="/">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
