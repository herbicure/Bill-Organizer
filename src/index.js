import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App.jsx';
import NavLinks from './components/NavLinks.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Snapshot from './components/Snapshot.jsx';
import requireAuth from './utils/auth.js';
import January from './components/months/January.jsx';
import February from './components/months/February.jsx';
import March from './components/months/March.jsx';


ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="register" component={Register} />
      <Route path="login" component={Login} />
      <Route path=":uid" component={Dashboard} onEnter={requireAuth} >
        <Route path="january" component={January} onEnter={requireAuth} />
        <Route path="february" component={February} onEnter={requireAuth} />
        <Route path="march" component={March} onEnter={requireAuth} />
      </Route>
    </Route>

  </Router>
  ), document.querySelector('#root'));



