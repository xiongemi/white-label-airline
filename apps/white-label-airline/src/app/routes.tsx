import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Search } from '@white-label-airline/ui';

export const Routes = () => {
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
