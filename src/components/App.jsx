import React, { Component } from 'react';
import NavLinks from './NavLinks.jsx';
import January from './January.jsx';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div id="app-nav">
          <h1 id="main-header">MONTHLY BILL ORGANIZER</h1>
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



