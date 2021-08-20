// Firebase deps
import firebaseConfig from "../config/firebaseConfig";

// Add user to firestore
export async function addUser(user, gsReference) {
  try {
    if (user.photoURL) {
      await firebaseConfig.firestore().collection("users").doc(user.uid).set({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        chats: [],
      });
    } else {
      gsReference.getDownloadURL().then(async (url) => {
        await firebaseConfig.firestore().collection("users").doc(user.uid).set({
          id: user.uid,
          name: user.email,
          email: user.email,
          avatar: url,
          chats: [],
        });
      });
    }
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
