import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Route from './Route';
import Curriculo from 'src/pages/Curriculo';

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} title="Home" />
      <Route path="/curriculo" exact component={Curriculo} title="Currículo" />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
