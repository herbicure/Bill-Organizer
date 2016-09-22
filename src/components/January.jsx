import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import request from 'superagent';
import { Link } from 'react-router';
import BillPost from './BillPost.jsx';
import BillList from './BillList.jsx';
import NavLinks from './NavLinks.jsx';


class January extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billPosts: [],
      total: 0,
    };
    this.handlePublish = this.handlePublish.bind(this);
    this.httpDeletePost = this.httpDeletePost.bind(this);
    this.httpUpdatePost = this.httpUpdatePost.bind(this);
    this.httpPublishPost = this.httpPublishPost.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }
  componentDidMount() {
    this.httpGetPosts();
    this.calculateTotal();
  }
  httpGetPosts() {
    const url = 'https://monthly-bill-organizer.firebaseio.com/2016/january.json';
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
      }
      this.setState({ billPosts });
    });
  }
  handlePublish({ id, amount, description }) {
    if (id) {
      this.httpUpdatePost({ id, amount, description });
    } else {
      this.httpPublishPost({ amount, description });
    }
  }
  httpDeletePost(id) {
    const url = `https://monthly-bill-organizer.firebaseio.com/2016/january/${id}.json`;
    request.del(url).then(() => {
      this.httpGetPosts();
    });
  }
  httpUpdatePost({ id, amount, description }) {
    const url = `https://monthly-bill-organizer.firebaseio.com/2016/january/${id}.json`;
    request.patch(url).send({ id, amount, description }).then(() => {
      this.httpGetPosts();
    });
  }
  httpPublishPost({ amount, description }) {
    const url = 'https://monthly-bill-organizer.firebaseio.com/2016/january.json';
    request.post(url).send({ amount, description }).then(() => {
      this.httpGetPosts();
    });
  }
  calculateTotal() {
    let total2 = 0;
    // let tot = document.querySelector('#tot');
    let billAmounts = document.getElementsByClassName('amounts');
    console.log(billAmounts);
    for (let i = 0; i <= billAmounts; i++) {
      total2 = total2 + parseInt(billAmounts[i]);
    }
    this.setState({ total: total2 });
    // console.log(total2);
  }
  render() {
    return (
      <div>
        <div>
         <NavLinks />
         <br />
        </div>
        <div id="january" className="month">
          <h1 className="month-header">JANUARY 2016</h1>

          <BillList
           handleDelete={this.httpDeletePost}
           handlePublish={this.handlePublish}
            billPosts={this.state.billPosts}
            calculateTotal={this.state.calculateTotal}
          />
          <BillPost
            handleDelete={this.httpDeletePost}
            handlePublish={this.handlePublish}
            calculateTotal={this.state.calculateTotal}
          />
          <h2>TOTAL: <span id="tot">${this.state.total}</span></h2>
        </div>
      </div>
    );
  }
}

export default January;



