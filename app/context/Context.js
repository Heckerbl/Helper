import { View, Text } from "react-native";
import { createContext, useState, useEffect } from "react";

// importing the firebase app
import { firebaseConfig } from "../config/config";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// creating the context
export const ContextStore = createContext();

export default function Context({ children }) {
  // setting the states

  const [user, setUser] = useState("");

  // initializing the firebase app
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      setUser(user);
    } else {
      console.log("there is no logged in user");
      setUser("");
    }
  });

  return (
    <ContextStore.Provider value={"hello context"}>
      {children}
    </ContextStore.Provider>
  );
}
