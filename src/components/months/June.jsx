import React, { Component } from 'react';
import firebase from '../../../firebase.config.js';
import request from 'superagent';
import BillPost from '../BillPost.jsx';
import BillList from '../BillList.jsx';


class June extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billPosts: [],
      junTotal: 0,
    };
    this.handlePosting = this.handlePosting.bind(this);
    this.httpRemovePost = this.httpRemovePost.bind(this);
    this.httpUpdatePost = this.httpUpdatePost.bind(this);
    this.httpPublishPost = this.httpPublishPost.bind(this);
  }
  componentDidMount() {
    this.httpGetPosts();
  }
  httpGetPosts() {
    let userId = firebase.auth().currentUser.uid;
    const url = `https://monthly-bill-organizer.firebaseio.com/users/${userId}/2016/june.json`;
    request.get(url).then((response) => {
      const postsData = response.body;
      let billPosts = [];
      if (postsData) {
        billPosts = Object.keys(postsData).map((id) => {
          const oneBill = postsData[id];
          return {
            id,
            amount: oneBill.amount,
            description: oneBill.description,
            dueDate: oneBill.dueDate,
          };
        });
        this.setState({ billPosts });
        this.calculateTotal();
      }
    });
  }
  handlePosting({ id, amount, description, dueDate }) {
    if (id) {
      this.httpUpdatePost({ id, amount, description, dueDate });
    } else {
      this.httpPublishPost({ amount, description, dueDate });
    }
  }
  httpRemovePost(id) {
    let userId = firebase.auth().currentUser.uid;
    const url = `https://monthly-bill-organizer.firebaseio.com/users/${userId}/2016/june/${id}.json`;
    request.del(url).then(() => {
      this.httpGetPosts();
    });
  }
  httpUpdatePost({ id, amount, description, dueDate }) {
    let userId = firebase.auth().currentUser.uid;
    const url = `https://monthly-bill-organizer.firebaseio.com/users/${userId}/2016/june/${id}.json`;
    request.patch(url).send({ id, amount, description, dueDate }).then(() => {
      this.httpGetPosts();
    });
  }
  httpPublishPost({ amount, description, dueDate }) {
    let userId = firebase.auth().currentUser.uid;
    const url = `https://monthly-bill-organizer.firebaseio.com/users/${userId}/2016/june.json`;
    request.post(url).send({ amount, description, dueDate }).then(() => {
      this.httpGetPosts();
    });
  }
  calculateTotal() {
    let updatedTotal = 0;
    this.state.billPosts.forEach((bill) => {
      updatedTotal += parseFloat(bill.amount);
      this.setState({
        junTotal: updatedTotal.toFixed(2),
      });
    });
  }
  render() {
    return (
      <div>
        <br />
        <div id="june" className="month">
          <h1 className="month-header">JUNE 2016</h1>
          <BillPost
            handleRemove={this.httpRemovePost}
            handlePosting={this.handlePosting}
          />
          <BillList
            handleRemove={this.httpRemovePost}
            handlePosting={this.handlePosting}
            billPosts={this.state.billPosts}
          />
          <br />
          <h2>TOTAL: <span id="tot"> ${this.state.junTotal}</span></h2>
          <br />
        </div>
      </div>
    );
  }
}

export default June;
