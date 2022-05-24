import { createContext, useState, useEffect } from "react";

// importing the firebase app
import { firebaseApp } from "../config/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { dbReference } from "../../firebase/firebase";
import { query, where, onSnapshot, collection } from "firebase/firestore";
import "firebase/compat/firestore";
import "firebase/auth";

// creating the context
export const ContextStore = createContext();

export default function Context({ children }) {
  // user login state
  const [loggedInUser, setUser] = useState("NOTLOGGEDIN");

  // setting the profiles ie helpers
  const [helper, setHelper] = useState([]);

  // pre fetching all the profiles in the database
  useEffect(() => {
    const q = firebaseApp.firestore().collection("profiles/");
    onSnapshot(q, (snapshot) => {
      if (snapshot.docs.length > 0) {
        snapshot.docs.forEach((doc) => {
          let helperArray = helper;
          let helperObj = doc.data();
          helperObj.key = doc.id;
          helperArray.push(helperObj);
          // let newArray = [];
          // this gives an error but why i don't know
          // let helperSet = new Set(helperObj);
          // console.log({ helperSet });
          // helperSet.forEach((elem) => newArray.push(elem));

          setHelper([...helperArray]);

          const newSet = new Set(helper);
          const newArray = [];

          newSet.forEach((elem) => {
            newArray.push(elem);
          });

          setHelper(newArray);
        });
      }
    });
  }, []);

  // plan popup show state
  const [showSetPlan, setShowSetPlan] = useState(false);

  // state that contains the my profile
  const [myProfile, setMyProfile] = useState();

  // state to check if the user profile is new or not
  const [isNew, setIsNew] = useState(true);

  // state for handaling search and it's output
  const [searchData, setSearchData] = useState({
    searchTerm: null,
    searchOutput: "noSearch",
  });

  // reference data
  //   {
  //   id: "",
  //   displayName: "",
  //   quote: "",
  //   jobTitle: "",
  //   plans: [
  //     // {
  //     //   id: "",
  //     //   name: "",
  //     //   price: "",
  //     //   description: "",
  //     //   workingTime: "",
  //     //   response: "",
  //     // },
  //   ],
  // }

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
        createNew: [isNew, setIsNew],
        search: [searchData, setSearchData],
        helperData: [helper, setHelper],
      }}
    >
      {children}
    </ContextStore.Provider>
  );
}
