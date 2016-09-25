import React, { Component } from 'react';
import firebase from '../../../firebase.config.js';
import request from 'superagent';
import BillPost from '../BillPost.jsx';
import BillList from '../BillList.jsx';
import Snapshot from '../Snapshot.jsx';


class January extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billPosts: [],
      janTotal: 0,
      // renderTest: false,
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
    const url = `https://monthly-bill-organizer.firebaseio.com/users/${userId}/2016/january.json`;
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
          };
        });
        this.setState({ billPosts });
        this.calculateTotal();
      }
    });
  }
  handlePosting({ id, amount, description }) {
    if (id) {
      this.httpUpdatePost({ id, amount, description });
    } else {
      this.httpPublishPost({ amount, description });
    }
  }
  httpRemovePost(id) {
    let userId = firebase.auth().currentUser.uid;
    const url = `https://monthly-bill-organizer.firebaseio.com/users/${userId}/2016/january/${id}.json`;
    request.del(url).then(() => {
      this.httpGetPosts();
    });
  }
  httpUpdatePost({ id, amount, description }) {
    let userId = firebase.auth().currentUser.uid;
    const url = `https://monthly-bill-organizer.firebaseio.com/users/${userId}/2016/january/${id}.json`;
    request.patch(url).send({ id, amount, description }).then(() => {
      this.httpGetPosts();
    });
  }
  httpPublishPost({ amount, description }) {
    let userId = firebase.auth().currentUser.uid;
    const url = `https://monthly-bill-organizer.firebaseio.com/users/${userId}/2016/january.json`;
    request.post(url).send({ amount, description }).then(() => {
      this.httpGetPosts();
    });
  }
  calculateTotal() {
    let updatedTotal = 0;
    this.state.billPosts.forEach((bill) => {
      updatedTotal += parseFloat(bill.amount);
      this.setState({
        janTotal: updatedTotal.toFixed(2),
      });
    });
  }
  // renderTest() {
  //   this.setState({
  //     renderTest: false,
  //   });
  //   console.log(this.state.renderTest);
  // }
  render() {
    return (
      <div>
        <br />
        <div id="january" className="month">
          <h1 className="month-header">JANUARY 2016</h1>
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
          <h2>TOTAL: <span id="tot"> ${this.state.janTotal}</span></h2>

          <br />
        </div>
      </div>
    );
  }
}

export default January;

//<Snapshot janTotal={this.state.janTotal} renderTest={this.state.renderTest} />
