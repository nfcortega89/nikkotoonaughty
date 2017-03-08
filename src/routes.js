import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Main from './components/main';
import Card from './components/card';

export default (
  <Route path="/nikkotoonaughty" component={App}>
    <IndexRoute component={Main} />
    <Route path="/nikkotoonaughty/redirect" component={Main} />
  </Route>
)
