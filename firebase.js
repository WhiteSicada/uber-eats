import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwu1upVz3qpwR05hw-wMOz4Kx5TdaFepo",
  authDomain: "rn-uber-eats-yt.firebaseapp.com",
  projectId: "rn-uber-eats-yt",
  storageBucket: "rn-uber-eats-yt.appspot.com",
  messagingSenderId: "628962933513",
  appId: "1:628962933513:web:203fa8a059b2cc23e9f1d8",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
