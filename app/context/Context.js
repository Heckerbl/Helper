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

  const [user, setUser] = useState("NOTLOGGEDIN");

  // initializing the firebase app
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, (user) => {
    /*
// attension required.
//*/
    // TODO: make the google login
    // following: https://javascript.plainenglish.io/react-native-firebase-adding-google-authenticaton-in-an-expo-project-2-ed20cb440732
    // and adding signature to the google console

    if (user) {
      console.log(user);
      setUser(user);
    } else {
      setUser("NOTLOGGEDIN");
    }
  });

  return (
    <ContextStore.Provider value={{ usr: [user, setUser] }}>
      {children}
    </ContextStore.Provider>
  );
}
