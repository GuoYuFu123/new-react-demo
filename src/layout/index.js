import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from './components/Layout';

import Demo from '../demo/Hook';
import Demo1 from '../demo/Hook/Demo2';
import Children from '../demo/Children';
import Page from '../demo/page/Page';
import TestChildren from '../demo/Children/Children';

let LayoutRouter = (
  <Children>
    <Switch>
      <Route exact path="/children" component={Page} />
      <Route exact path="/children/test" component={Page} />
    </Switch>
  </Children>
);
const BasicLayout = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Login} />
      <Route path="/" exact component={Layout} />
      <Route path="/demo" exact component={Demo} />
      <Route path='/children' render={ props => LayoutRouter } />
      <Route path='/testchildren' component={TestChildren} />

    </Switch>
  </HashRouter>
);

export default BasicLayout;
