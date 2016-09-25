import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import { Link } from 'react-router';

const propTypes = {};

class NavLinks extends Component {
  constructor() {
    super();
  }
  render() {
    const userId = firebase.auth().currentUser.uid;
    return (
      <div>
        <div id="nav-links">
          <Link to={`/${userId}/january`} className="monthLinks" id="jan">January </Link>
          <Link to={`/${userId}/february`} className="monthLinks" id="feb">February </Link>
          <Link to={`/${userId}/march`} className="monthLinks" id="mar">March </Link>
          <Link to={`/${userId}/april`} className="monthLinks" id="apr">April </Link>
          <Link to={`/${userId}/may`} className="monthLinks" id="may">May </Link>
          <Link to={`/${userId}/june`} className="monthLinks" id="jun">June </Link>
          <Link to={`/${userId}/july`} className="monthLinks" id="jul">July </Link>
          <Link to={`/${userId}/august`} className="monthLinks" id="aug">August </Link>
          <Link to={`/${userId}/september`} className="monthLinks" id="sept">September </Link>
          <Link to={`/${userId}/october`} className="monthLinks" id="oct">October </Link>
          <Link to={`/${userId}/november`} className="monthLinks" id="nov">November </Link>
          <Link to={`/${userId}/december`} className="monthLinks" id="dec">December </Link>
        </div>
      </div>
    );
  }
}

NavLinks.propTypes = propTypes;

export default NavLinks;
