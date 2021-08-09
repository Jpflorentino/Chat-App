// Firebase deps
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export async function signInWithGoogle(auth) {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.useDeviceLanguage();
  try {
    await auth.signInWithPopup(provider);
  } catch (error) {
    console.error(error);
  }
}
