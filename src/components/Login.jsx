import React, {Component} from 'react';
import firebase from '../../firebase.config.js';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  handleSubmit() {
    const { email, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err);
      })
      .then(() => {
        // this.props.router.push('/dashboard');
        const userId = firebase.auth().currentUser.uid;
        this.props.router.push(`/${userId}`);
      });
      console.log('logged in');
      firebase.auth().onAuthStateChanged((user) => {
        console.log(user);
      });
  }
  render() {
    return (
      <div>
        <div id="login-form">
          <div>
            <input className="input-forms" name="email" onChange={this.handleChange} type="text" placeholder="email address" />
          </div>
          <div>
            <input className="input-forms" name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <button className="btn" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);


