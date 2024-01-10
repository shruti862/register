"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      return () => unsubscribe();
    });
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, logOut, googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
