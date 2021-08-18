import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export async function signOut() {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.error(error);
  }
}
