/* eslint-disable no-unused-expressions */
import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/entrar" exact component={Auth} />
    <Route path="/" exact component={Dashboard} isPrivate title="Veículos" />
  </Switch>
);

export default Routes;
