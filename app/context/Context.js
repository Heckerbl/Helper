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
  // user login state
  const [loggedInUser, setUser] = useState("NOTLOGGEDIN");

  // plan popup show state
  const [showSetPlan, setShowSetPlan] = useState(false);

  // state that contains the my profile

  const [myProfile, setMyProfile] = useState({
    displayName: "",
    quote: "",
    jobTitle: "",
    plans: [
      {
        id: "",
        name: "",
        price: "",
        description: "",
        workingTime: "",
        response: "",
      },
    ],
  });

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
    <ContextStore.Provider
      value={{
        usr: [loggedInUser, setUser],
        showPlan: [showSetPlan, setShowSetPlan],
        myProfileData: [myProfile, setMyProfile],
      }}
    >
      {children}
    </ContextStore.Provider>
  );
}
