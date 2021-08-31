import React from 'react';
import {  HashRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Admin from './pages/admin/index.jsx'
import Login from './pages/login/index.jsx'
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/admin' component={Admin}/>
        <Route path='/' component={Login}/>
      </Switch>
    </HashRouter>
  );
} 

export default App;
