import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Menu} path="/menu" />
    </BrowserRouter>
  )

}

export default Routes;