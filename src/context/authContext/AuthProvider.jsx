"use client";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";
export const authContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
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
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
