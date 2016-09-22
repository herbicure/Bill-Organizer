import React from 'react';
import BillPost from './BillPost.jsx';

const propTypes = {
  billPosts: React.PropTypes.array,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
  calculateTotal: React.PropTypes.func,
};

class BillList extends React.Component {
  render() {
    const billElements = this.props.billPosts.map((billPost, idx) => {
      return (
        <li key={idx}>
          <BillPost
            handleDelete={this.props.handleDelete}
            handlePublish={this.props.handlePublish}
            calculateTotal={this.props.calculateTotal}
            amount={billPost.amount}
            description={billPost.description}
            id={billPost.id}
          />
        </li>
      );
    });
    return (
      <ul>
        {billElements}
      </ul>
    );
  }
}

BillList.propTypes = propTypes;

export default BillList;



