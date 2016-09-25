import React, { Component } from 'react';
import NavLinks from './NavLinks.jsx';
import January from './months/January.jsx';
import Snapshot from './Snapshot.jsx';
// import February from './months/February.jsx';

const propTypes = {
  children: React.PropTypes.element,
  // janTotal: React.PropTypes.number,
};

class Dashboard extends Component {
  constructor(props) {
  super(props);
    this.state = {
      renderTest: true,
    };
  }
  renderTest() {
    this.setState({
      renderTest: true,
    });
    console.log(this.state.renderTest);
  }
  render() {
    return (
      <div>
        <div>
          <NavLinks />
          {this.props.children}
        </div>
        <div>

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = propTypes;

export default Dashboard;

// <Snapshot renderTest={this.state.renderTest} />
//<Snapshot janTotal={this.props.janTotal} />

// const propTypes = {
//   janTotal: React.PropTypes.number,
// };

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       janTotal: 0,
//     };
//   }
//   render() {
//     let januaryTotal;
//     januaryTotal = document.getElementById('tot');
//     console.log(januaryTotal);
//     return (
//       <div>
//         <NavLinks />
//           januaryTotal={this.props.janTotal}
//         />
//       </div>
//     );
//   }
// }

// Dashboard.propTypes = propTypes;

// export default Dashboard;


// const Dashboard = () => {
//   return (
//     <div>
//       <NavLinks />

//     </div>
//   );
// };

// export default Dashboard;



