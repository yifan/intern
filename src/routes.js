import React from 'react'
//import cookie from 'react-cookie'
import { Route } from 'react-router-dom';
import Base from './components/base'
import HomePage from './components/homepage'


const routes = () => {
  return (
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/about' component={HomePage}/>
  );
};

export default routes
