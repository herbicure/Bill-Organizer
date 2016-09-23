import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App.jsx';
import NavLinks from './components/NavLinks.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import requireAuth from './utils/auth.js';
import January from './components/January.jsx';
import February from './components/February.jsx';


ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="register" component={Register} />
      <Route path="login" component={Login} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="january" component={January} />
      <Route path="february" component={February} />

    </Route>
  </Router>
  ), document.querySelector('#root'));






