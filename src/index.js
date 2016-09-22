import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App.jsx';
import NavLinks from './components/NavLinks.jsx';
import January from './components/January.jsx';


ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={NavLinks} />
      <Route path="january" component={January} />

    </Route>
  </Router>
  ), document.querySelector('#root'));


// <Route path="january" component={January} />
