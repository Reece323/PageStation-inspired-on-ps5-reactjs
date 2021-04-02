import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Start from '../pages/Start';
import Users from '../pages/Users';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Start} />
    <Route path="/users" component={Users} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default Routes;
