// Firebase deps
import firebaseConfig from "./utils/config/firebaseConfig";

// Styles
import "semantic-ui-css/semantic.min.css";
import "./style/appStyle.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";

// Custom components and functions
import { addUser } from "./utils/db/dbOperations";
import { Navbar } from "./utils/components/Navbar";
import { MyForm } from "./utils/components/MyForm";
import { handlerLogin, handlerSignUp, handlerLogout } from "./utils/handlerCollection/handlers";

const auth = firebaseConfig.auth();
const storage = firebaseConfig.storage();
const gsReference = storage.refFromURL("gs://chat-app-23e69.appspot.com/images/emailUser.png");

export default function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initialization, setInitialization] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        addUser(user, gsReference);
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

  if (user) {
    return (
      <div className="App">
        <Router>
          <Navbar user={user} handlerLogout={handlerLogout} />
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <Navbar user={user} handlerLogout={handlerLogout} />
        </Router>
        <MyForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handlerLogin={handlerLogin}
          handlerSignUp={handlerSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
        />
      </div>
    );
  }
}
