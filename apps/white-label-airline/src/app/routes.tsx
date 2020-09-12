import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import Search from '@white-label-airline/ui/search';

export const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
