import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import SearchPage from '../pages/search/search-page';
import QuotesPage from '../pages/quotes/quotes-page';

import { RoutesPath } from './routes-path.enum';

export const Routes: React.FunctionComponent = () => {
  return (
    <BrowserRouter basename={process.env.NX_BASE_HREF}>
      <Switch>
        <Route path={RoutesPath.Outbound}>
          <QuotesPage />
        </Route>
        <Route path={RoutesPath.Inbound}>
          <QuotesPage />
        </Route>
        <Route path={RoutesPath.Search}>
          <SearchPage />
        </Route>
        <Redirect from="/" to={RoutesPath.Search} />
        <Route render={() => <Redirect to={RoutesPath.Search} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
