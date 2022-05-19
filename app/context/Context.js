import { View, Text } from "react-native";
import { createContext, useState, useEffect } from "react";

// importing the firebase app
import { firebaseConfig } from "../config/config";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { logout } from "../../firebase/Logout";

// creating the context
export const ContextStore = createContext();

// initializing the firebase app
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default function Context({ children }) {
  // setting the states

  const [loggedInUser, setUser] = useState("NOTLOGGEDIN");

  // setting the firebase auth
  const auth = getAuth(firebaseApp);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.providerData[0]);
    } else {
      setUser("NOTLOGGEDIN");
    }
  });

  return (
    <ContextStore.Provider value={{ usr: [loggedInUser, setUser] }}>
      {children}
    </ContextStore.Provider>
  );
}
