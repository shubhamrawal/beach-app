const firebase = require("firebase-admin");
require("firebase/auth");
require("firebase/firestore");

const serviceAccountKey = require("../ServiceAccountKey");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccountKey)
});

const db = firebase.firestore();

const insertToken = (req, res, next) => {
  if (req.headers.authorization) {
    const authHeader = req.headers.authorization.split(" ");
    if (authHeader.length == 2) {
      const token = authHeader[1];
      if (token) {
        req.token = token;
      }
    }
  }
  next();
};

const getUid = async token => {
  const decodedToken = await firebase.auth().verifyIdToken(token);
  return decodedToken.uid;
};

const auth = (req, res, next) => {
  if (req.token) {
    next();
  } else {
    res.send(404).status({ error: "Not Authorised" });
  }
};

module.exports = { firebase, db, insertToken, getUid, auth };
