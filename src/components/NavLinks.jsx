import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import { Link } from 'react-router';

const propTypes = {};

class NavLinks extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div id="nav-links">
          <Link to="/january" className="monthLinks" id="jan">January </Link>
          <Link to="/february" className="monthLinks" id="feb">February </Link>
          <Link to="/march" className="monthLinks" id="mar">March </Link>
          <Link to="/april" className="monthLinks" id="apr">April </Link>
          <Link to="/may" className="monthLinks" id="may">May </Link>
          <Link to="/june" className="monthLinks" id="jun">June </Link>
          <Link to="/july" className="monthLinks" id="jul">July </Link>
          <Link to="/august" className="monthLinks" id="aug">August </Link>
          <Link to="/september" className="monthLinks" id="sept">September </Link>
          <Link to="/october" className="monthLinks" id="oct">October </Link>
          <Link to="/november" className="monthLinks" id="nov">November </Link>
          <Link to="/december" className="monthLinks" id="dec">December </Link>
        </div>
      </div>
    );
  }
}

NavLinks.propTypes = propTypes;

export default NavLinks;
