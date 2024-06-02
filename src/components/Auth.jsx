import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn(e) {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function signInWithGoogle(e) {
    e.preventDefault();
    await signInWithPopup(auth, googleProvider)
      .then((response) => {
        alert("succes");
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function logOut(e) {
    e.preventDefault();
    await signOut(auth)
      .then((response) => {
        alert("succes");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div>
      <form action="" onSubmit={signIn}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="send " />
        <button onClick={signInWithGoogle}> Sign In With Google</button>
        <button onClick={logOut}> Logout </button>
      </form>
    </div>
  );
};

export default Auth;
