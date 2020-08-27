import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Login  from '../components/login';
import Game  from '../components/game';
import Result  from '../components/result';
import FourZeroFour from '../components/FourZeroFour';

const protectedRoutes = (
  <Switch>
    <Redirect from="/" exact to="/login" />
    <Route exact path="/login" component={Login} />
    <Route exact path="/game" component={Game} />
    <Route exact path="/result" component={Result} />
    <Route component={FourZeroFour} />
  </Switch>
);

export default protectedRoutes;