import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXlNffQPHrGcErlwuPfeAIaMS3BVsmpTA",
  authDomain: "beachapp-b7cf4.firebaseapp.com",
  databaseURL: "https://beachapp-b7cf4.firebaseio.com",
  projectId: "beachapp-b7cf4",
  storageBucket: "beachapp-b7cf4.appspot.com",
  messagingSenderId: "657803429876",
  appId: "1:657803429876:web:d393f6e8201636b8899ba1",
  measurementId: "G-E5Y9HYK3N3"
};

firebase.initializeApp(firebaseConfig);

const firebaseLogin = async (email, password) => {
  const { user } = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return user;
};

const firebaseLogout = () => {
  firebase.auth().signOut();
};

const isLoggedIn = async () => {
  await firebase.auth().onAuthStateChanged(user => {
    return !!user;
  });
};

const getCurrentUser = async () => {
  await firebase.auth().onAuthStateChanged(user => {
    return user;
  });
};

export { firebaseLogin, firebaseLogout, isLoggedIn, getCurrentUser };
