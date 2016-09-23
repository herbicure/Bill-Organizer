import React, { Component } from 'react';
import NavLinks from './NavLinks.jsx';
import January from './January.jsx';

const Dashboard = () => {
  return (
    <div>
      <NavLinks />
    </div>
  );
};

export default Dashboard;

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


