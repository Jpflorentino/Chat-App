// Firebase deps
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const { REACT_APP_APIKEY, REACT_APP_AUTHDOMAIN, REACT_APP_PROJECTID, REACT_APP_STORAGEBUCKET, REACT_APP_MESSAGINGSENDERID, REACT_APP_APPID, REACT_APP_MEASUREMENTID } = process.env;

const firebaseConfig = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINGSENDERID,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MEASUREMENTID,
});

export default firebaseConfig;
