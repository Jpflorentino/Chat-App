// Firebase deps
import firebaseConfig from "../config/firebaseConfig";

// Add user to firestore
export async function addUser(user) {
  try {
    await firebaseConfig.firestore().collection("users").doc(user.uid).set({
      id: user.uid,
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL,
      chats: [],
    });
  } catch (error) {
    console.error(error);
  }
}

// Remove user to firestore
export async function removeUser(user) {
  try {
    const users = await firebaseConfig.firestore().collection("users").where("id", "==", user.uid).get();
    users.forEach(async (document) => {
      try {
        await firebaseConfig.firestore().collection("users").doc(document.data().id).delete();
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}
