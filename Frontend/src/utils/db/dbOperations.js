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
    await firebaseConfig.firestore().collection("users").doc(user.id).delete();
  } catch (error) {
    console.error(error);
  }
}

export async function getUser(user) {
  try {
    const userDocument = await firebaseConfig.firestore().collection("users").doc(user.uid).get();
    return userDocument.data();
  } catch (error) {
    console.error(error);
  }
}

export async function addChatToUser(user, inputValue) {
  try {
    await firebaseConfig
      .firestore()
      .collection("users")
      .doc(user.id)
      .update({
        chats: firebaseConfig.firestore.FieldValue.arrayUnion(inputValue),
      });
  } catch (error) {
    console.error(error);
  }
}

export async function getAllChatsFromUser(user) {
  try {
    await firebaseConfig.firestore().collection("users").doc(user.id);
  } catch (error) {
    console.error(error);
  }
}
