import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBmzdlKlKcIQlKeB6H_ap-n5HDVv_y1uiE",
  authDomain: "shopping-app-124ec.firebaseapp.com",
  databaseURL: "https://shopping-app-124ec.firebaseio.com",
  projectId: "shopping-app-124ec",
  storageBucket: "shopping-app-124ec.appspot.com",
  messagingSenderId: "631353994042",
  appId: "1:631353994042:web:eb99239cbfd1b107f47e03",
  measurementId: "G-VTBHKJSQPG"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
