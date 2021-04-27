import React from 'react';
import { Router, Route } from 'react-router-dom';

import landingpage from './pages/landingpage';
import register from './pages/register';
import login from './pages/login';

const Routes = () => {
  return (
    <Router> 
      <Route exact path='/' component={landingpage}></Route>
      <Route exact path='/login' component={login}></Route>
      <Route exact path='/register' component={register}></Route>
    </Router>
  );
}

export default Routes;