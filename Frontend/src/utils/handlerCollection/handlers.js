// Firebase deps
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../config/firebaseConfig";

export async function handlerSignUp(email, password) {
  try {
    await firebaseConfig.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    alert(error.message);
  }
}

export async function handlerLogin(email, password) {
  try {
    await firebaseConfig.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error(error);
  }
}

export async function handlerLogout() {
  try {
    await firebaseConfig.auth().signOut();
  } catch (error) {
    console.error(error);
  }
}

export async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();
  try {
    await firebase.auth().signInWithPopup(provider);
  } catch (error) {
    console.error(error);
  }
}
