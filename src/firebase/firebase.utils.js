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
  measurementId: "G-VTBHKJSQPG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
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
