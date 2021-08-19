// Firebase deps
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../config/firebaseConfig";

export async function handlerLogin() {}

export function handlerSignUp() {}

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
