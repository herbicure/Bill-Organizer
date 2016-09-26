import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App.jsx';
// import NavLinks from './components/NavLinks.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
// import Snapshot from './components/Snapshot.jsx';
import requireAuth from './utils/auth.js';
import January from './components/months/January.jsx';
import February from './components/months/February.jsx';
import March from './components/months/March.jsx';
import April from './components/months/April.jsx';
import May from './components/months/May.jsx';
import June from './components/months/June.jsx';
import July from './components/months/July.jsx';
import August from './components/months/August.jsx';
import September from './components/months/September.jsx';
import October from './components/months/October.jsx';
import November from './components/months/November.jsx';
import December from './components/months/December.jsx';


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
        <Route path="april" component={April} onEnter={requireAuth} />
        <Route path="may" component={May} onEnter={requireAuth} />
        <Route path="june" component={June} onEnter={requireAuth} />
        <Route path="july" component={July} onEnter={requireAuth} />
        <Route path="august" component={August} onEnter={requireAuth} />
        <Route path="september" component={September} onEnter={requireAuth} />
        <Route path="october" component={October} onEnter={requireAuth} />
        <Route path="november" component={November} onEnter={requireAuth} />
        <Route path="december" component={December} onEnter={requireAuth} />
      </Route>
    </Route>

  </Router>
  ), document.querySelector('#root'));



