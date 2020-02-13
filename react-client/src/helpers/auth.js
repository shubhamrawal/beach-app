import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import { navigate } from "@reach/router";

const firebaseConfig = {
  apiKey: "AIzaSyCXlNffQPHrGcErlwuPfeAIaMS3BVsmpTA",
  authDomain: "beachapp-b7cf4.firebaseapp.com",
  databaseURL: "https://beachapp-b7cf4.firebaseio.com",
  projectId: "beachapp-b7cf4",
  storageBucket: "gs://beachapp-b7cf4.appspot.com",
  messagingSenderId: "657803429876",
  appId: "1:657803429876:web:d393f6e8201636b8899ba1",
  measurementId: "G-E5Y9HYK3N3"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

let currentUser = null;

const firebaseLogin = async (email, password) => {
  const { user } = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return user;
};

const firebaseSignup = async (email, password) => {
  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return user;
};

const firebaseLogout = async () => {
  await firebase.auth().signOut();
};

const dispatchUser = callback => {
  firebase.auth().onAuthStateChanged(user => {
    currentUser = user;
    callback(user);
  });
};

const withAuth = (callback, redirect = "/") => {
  if (currentUser) {
    callback();
  } else {
    navigate("/login", { state: { redirect_url: redirect } });
  }
};

export {
  firebaseLogin,
  firebaseLogout,
  dispatchUser,
  firebaseSignup,
  withAuth,
  storage
};
