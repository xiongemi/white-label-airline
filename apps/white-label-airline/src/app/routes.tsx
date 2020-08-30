import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
