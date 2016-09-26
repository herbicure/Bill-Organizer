import React, { Component } from 'react';
import NavLinks from './NavLinks.jsx';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';
// import Home from './Home.jsx';
// import Register from './Register.jsx';
// import Login from './Login.jsx';
// import January from './January.jsx';
// import February from './February.jsx';
// import Dashboard from './Dashboard.jsx';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  componentWillMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (user !== null),
        });
      });
    }, 200);
  }
  signOut() {
    firebase.auth()
    .signOut()
    .then(() => {
      console.log('signed out');
    });
  }
  loggedInLinks() {
    if(!this.state.loggedIn) {
      return (
        <div>
          <Link to="/login" id="login">Login / </Link>
          <Link to="/register" id="register">Register</Link>
        </div>
      );
    } else {
      return (
        <div id="sign-out">
          <Link id="signOut" to="/" onClick={this.signOut}>Sign Out</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div id="app-nav">
          <h1 id="main-header">MONTHLY BILL ORGANIZER</h1><br />
          <h4 id="sub-header">~Never miss another payment again~</h4>

          {
            this.loggedInLinks()
          }
        </div>
        <div id="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;



