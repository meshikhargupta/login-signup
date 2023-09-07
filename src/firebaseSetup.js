import firebase from "firebase/compat/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXrCs3NRALtJZlzRvCZi6x8Rk_Ivom6rY",
  authDomain: "auth-demo-b1a7a.firebaseapp.com",
  projectId: "auth-demo-b1a7a",
  storageBucket: "auth-demo-b1a7a.appspot.com",
  messagingSenderId: "12439683190",
  appId: "1:12439683190:web:ac32ad44f6321ba857df57",
  measurementId: "G-QCRVXF67GP",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const fbAuth = getAuth(app);

export const provider = new FacebookAuthProvider();
