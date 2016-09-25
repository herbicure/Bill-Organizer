const React = require('react'),
firebase = require('../../firebase.config.js');

function requireAuth(nextState, replace, callback) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user === null) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
    callback();
  });
}

module.exports = requireAuth;
