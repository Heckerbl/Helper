import { View, Text } from "react-native";
import { createContext, useState, useEffect } from "react";
import firebase from "firebase";
// the file that contains the configuration of the firebase.
import { firebaseConfig } from "../config/config";

// creating the context
export const ContextStore = createContext();

export default function Context({ children }) {
  firebase.initializeApp(firebaseConfig);

  return (
    <ContextStore.Provider value={"hello context"}>
      {children}
    </ContextStore.Provider>
  );
}
