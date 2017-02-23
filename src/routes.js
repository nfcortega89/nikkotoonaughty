import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Board from './components/board';
import Card from './components/card'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Board} />
    <Route path="/redirect" component={Card} />
  </Route>
)
