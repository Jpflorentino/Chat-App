// Firebase deps
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Styles
import "semantic-ui-css/semantic.min.css";
import "./style/appStyle.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";

// Custom components and functions
import { addUser } from "./utils/db/dbOperations";
import { Navbar } from "./utils/components/Navbar";
import { MyForm } from "./utils/components/MyForm";

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

export default function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initialization, setInitialization] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        addUser(user);
      } else {
        setUser(null);
      }
      if (initialization) {
        setInitialization(false);
      }
    });
    return unsubscribe;
  }, [initialization, user]);

  if (initialization) return "Loading...";

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
      </Router>
      <MyForm />
    </div>
  );
}
