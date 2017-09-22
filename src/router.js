import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Details from './compoents/Details/Details';
import Landing from './components/Landing/Landing';
import Shop from './components/Shop/Shop';

export default (
  <Switch>
    <Route component={Landing} exact path={'/'}/>
    <Route component={Cart} path='/cart'/>
    <Route component={Details} path='/details/:name' />
    <Route component={Shop} path='/shop' />
  </Switch>
)
