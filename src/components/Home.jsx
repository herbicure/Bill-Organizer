import React, {Component} from 'react';

const Home = () => {
  return (
    <div id="home-screen">
      <h1 id="home-header"> A one stop shop for managing your expenses online! </h1>
      <img id="wallet" src="./images/wallet.png" />
        <div id="app-summary">
         <p>Monthly Bill Organizer offers help with: <br /></p>
          <ul id="selling-points">
            <li>Budget assistance</li>
            <li>Spending trends</li>
            <li>Payment punctuality</li>
          </ul>
        </div>
    </div>
  );
};

export default Home;
