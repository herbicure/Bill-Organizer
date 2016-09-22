const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyDVceHyj9laHIhz0CT7OatTtCpFyT1An3s",
  authDomain: "monthly-bill-organizer.firebaseapp.com",
  databaseURL: "https://monthly-bill-organizer.firebaseio.com",
  storageBucket: "monthly-bill-organizer.appspot.com",
  messagingSenderId: "149711740438"
};

firebase.initializeApp(config);

module.exports = firebase;
