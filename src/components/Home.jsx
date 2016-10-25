import React, {Component} from 'react';

const Home = () => {
  return (
    <div id="home-screen">
      <h1 id="home-header"> Manage your expenses online!</h1>
      <img id="wallet" src="images/wallet.png" />
        <div id="app-summary">
         <p>Log-in or register for immediate assistance with: <br /></p>
          <ul id="selling-points">
            <li className="sellLi">Payment punctuality</li>
            <li className="sellLi">Budgeting</li>
            <li className="sellLi">Spending trends</li>
            <li className="sellLi">...and more!</li>
          </ul>
        </div>
    </div>
  );
};

export default Home;
