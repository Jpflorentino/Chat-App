// Firebase deps
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Styles
import "semantic-ui-css/semantic.min.css";
import GoogleButton from "react-google-button";
import { useEffect, useState } from "react";

// Custom components and functions
import { signInWithGoogle } from "./Utils/Authentication/signInWithGoogle";

firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyCAe8GlI3_qgEyyuIXR3YXvVPrvfcQUMkc",
  authDomain: "chat-app-23e69.firebaseapp.com",
  projectId: "chat-app-23e69",
  storageBucket: "chat-app-23e69.appspot.com",
  messagingSenderId: "653274622575",
  appId: "1:653274622575:web:ce6300ae3c734f3f28bb9a",
  measurementId: "G-DX589W6QQV",
});

const auth = firebase.auth();

function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initialization, setInitialization] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initialization) {
        setInitialization(false);
      }
    });
    return unsubscribe;
  }, [initialization]);

  if (initialization) return "Loading...";
  return <div>{user ? "Welcome to chat" : <GoogleButton type="dark" onClick={signInWithGoogle(auth)} />}</div>;
}

export default App;
