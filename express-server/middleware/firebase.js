const firebase = require("firebase-admin");
require("firebase/auth");
require("firebase/firestore");

const serviceAccountKey = require("../ServiceAccountKey");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccountKey)
});

// const firebaseConfig = {
//   apiKey: "AIzaSyCXlNffQPHrGcErlwuPfeAIaMS3BVsmpTA",
//   authDomain: "beachapp-b7cf4.firebaseapp.com",
//   databaseURL: "https://beachapp-b7cf4.firebaseio.com",
//   projectId: "beachapp-b7cf4",
//   storageBucket: "beachapp-b7cf4.appspot.com",
//   messagingSenderId: "657803429876",
//   appId: "1:657803429876:web:d393f6e8201636b8899ba1",
//   measurementId: "G-E5Y9HYK3N3"
// };

// const cred = {
//   credential: firebase.credential.cert(serviceAccountKey)
// };

// firebase.initializeApp(...firebaseConfig, ...cred);
// firebase.initializeApp(firebaseConfig);

module.exports = firebase;
