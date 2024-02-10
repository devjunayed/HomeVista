"use client";
import {
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";
export const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [currentUser, setCurrentUser] = useState(null);
  const [uid, setUid] = useState("");

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
        setUid(currentUser.uid);
        await fetch("/api/jwt", {
          method: "POST",
          body: JSON.stringify({
            email: currentUser.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      } else {
        setCurrentUser(null);
        await fetch("/api/jwt", {
          method: "DELETE",
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    uid,
    googleSignIn,
    logOut,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
