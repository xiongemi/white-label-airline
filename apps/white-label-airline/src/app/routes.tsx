import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Search from '../pages/search/search';

export const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Search />
        </Route>

        <Route path="/quotes"></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
