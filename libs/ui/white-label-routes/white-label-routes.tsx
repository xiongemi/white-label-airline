import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import SearchPage from './components/search-page/search-page';
import QuotesPage from './components/quotes-page/quotes-page';
import { RoutesPath } from './models/routes-path.enum';
import { WhiteLabelRoutesProps } from './white-label-routes.props';

export const WhiteLabelRoutes: React.FunctionComponent<WhiteLabelRoutesProps> = ({
  initSearchForm,
}: WhiteLabelRoutesProps) => {
  return (
    <Router>
      <Switch>
        <Route path={RoutesPath.Outbound}>
          <QuotesPage />
        </Route>
        <Route path={RoutesPath.Inbound}>
          <QuotesPage />
        </Route>
        <Route path={RoutesPath.Search}>
          <SearchPage initSearchForm={initSearchForm} />
        </Route>
        <Redirect from="/" to={RoutesPath.Search} />
        <Route render={() => <Redirect to={RoutesPath.Search} />} />
      </Switch>
    </Router>
  );
};

export default WhiteLabelRoutes;
