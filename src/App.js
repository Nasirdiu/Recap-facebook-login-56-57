import "./App.css";
import app from "./firebase.init";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const facebookProvider = new FacebookAuthProvider();
  const handlegoogle = () => {
    const googleprovider = new GoogleAuthProvider();

    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handlessingout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };
  const handelerfacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <button onClick={handlegoogle}>google Sing in</button>
      <button onClick={handlessingout}>sing Out</button>
      <button onClick={handelerfacebook}>Facebook login</button>
      <h2>{user.displayName}</h2>
      <img src={user.photoURL} alt="" />
      <p>{user.email}</p>
    </div>
  );
}

export default App;
