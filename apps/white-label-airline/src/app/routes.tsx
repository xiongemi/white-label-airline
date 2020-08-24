import React, { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  mapStateToProps,
  mapDispatchToProps,
  RouteProps,
} from './routes.props';
import { connect } from 'react-redux';
import Search from '@white-label-airline/ui/search';
import { environment } from '../environments/environment';

export const Routes: React.FunctionComponent<RouteProps> = (
  props: RouteProps
) => {
  useEffect(() => {
    props.setApiKey(environment.apiKey);
  });

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

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
