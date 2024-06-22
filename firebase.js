import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3r3YPt6bqj3JJtffxn0udyFo12jtcjxw",
  authDomain: "signal-clone-ee479.firebaseapp.com",
  projectId: "signal-clone-ee479",
  storageBucket: "signal-clone-ee479.appspot.com",
  messagingSenderId: "669560955149",
  appId: "1:669560955149:web:cc4c8a1eadbbe173941044",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
