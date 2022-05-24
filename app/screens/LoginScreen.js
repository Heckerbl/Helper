import { Text, View, StyleSheet, Image } from "react-native";
import LoginButton from "../components/login/LoginButton";
import { ContextStore } from "../context/Context";
import { useContext } from "react";
import firebase from "firebase/compat/app";
// things that are needed for firebase
import { dbReference } from "../../firebase/firebase";
import { query, where, onSnapshot, collection } from "firebase/firestore";
import "firebase/compat/firestore";

import "firebase/compat/auth";

import * as Google from "expo-google-app-auth";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigator = useNavigation();

  const { usr, myProfileData, createNew } = useContext(ContextStore);

  const [user, setUser] = usr;
  const [myProfile, setMyProfile] = myProfileData;
  const [, setIsNew] = createNew;
  const androidClientId =
    "1022044952512-e6ftm4hklnncd5k59iu819qiu2u3lf0m.apps.googleusercontent.com";
  const handleFacebook = () => {};
  const handleGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: androidClientId,
      });

      if (result.type == "success") {
        const credentials = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );

        firebase
          .auth()
          .signInWithCredential(credentials)
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            // sends the user where it was redirected form to the login screen
            navigator.goBack();

            // setting user
            setUser({ ...result.user });

            // storing the user in the firebase users collection.
            const id = result.user.id;

            // check for the profile

            if (id) {
              const q = query(
                collection(dbReference, "/profiles"),
                where("id", "==", id)
              );
              onSnapshot(q, (snapshot) => {
                if (snapshot.docs.length > 0) {
                  // profile is found of the logged in user
                  setMyProfile(snapshot.docs[0].data());

                  let doc = snapshot.docs[0].id;
                  // it means that the profile that contains the doc url too in short docedprofile
                  let docedProfile = snapshot.docs[0].data();
                  docedProfile.key = doc;

                  setMyProfile({ ...docedProfile });
                  setIsNew(false);
                } else {
                  // it means the user is logged in but no profile is found
                  setMyProfile({
                    image: loggedInUser.photoURL,
                    displayName: loggedInUser.displayName,
                    // quote: "Pc is heart and the heart is heart i need to build it",
                  });
                  setIsNew(true);
                }
              });
            } else {
              setMyProfile({
                image:
                  "https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png",
                displayName: "New user",
                // quote: "Pc is heart and the heart is heart i need to build it",
              });
              setIsNew(true);
            }

            // checking if the user data already exists in the db or not
            // const q = query(
            //   collection(dbReference, "/users"),
            //   where("id", "==", id)
            // );
            // onSnapshot(q, (snapshot) => {
            //   if (snapshot.docs.length > 0) {
            //     //  update the active status
            //     console.log({ "updating the user": snapshot.docs[0] });
            //     const updateData = snapshot.docs[0].data();

            //     updateData.active = true;

            //     const dbReference = firebaseApp
            //       .firestore()
            //       .collection(`users/`)
            //       .doc(snapshot.docs[0].id);
            //     dbReference.set(updateData);
            //   } else {
            //     // set the new user and set the active status to true
            //     // creating the user object
            //     const userObj = {
            //       id: result.user.id,
            //       name: result.user.name,
            //       photo: result.user.photoUrl,
            //       active: true,
            //       chats: [],
            //     };

            //     console.log({ "adding the user": snapshot.docs[0].id });

            //     // sending to the firebase
            //     firebaseApp
            //       .firestore()
            //       .collection(`users/`)
            //       .add(userObj)
            //       .catch((err) => console.log(err));
            //   }
            // });
          });
      }
    } catch ({ message }) {
      alert(message);
    }
  };
  return (
    <View style={style.mainContainer}>
      <Image source={require("../assets/logo.png")} style={style.logo_img} />
      <Text style={style.title}>Helper</Text>
      <View style={style.btnContainer}>
        <LoginButton
          text={"Google"}
          image={require("../assets/google.png")}
          handleClick={handleGoogle}
        />
        <LoginButton
          text={"Facebook"}
          image={require("../assets/facebook.png")}
          handleClick={handleFacebook}
        />
      </View>
      <Text style={style.terms}>
        By continuing you agree our {"\n"}
        <Text style={style.terms_blue}> terms and conditions</Text>
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo_img: {
    height: 75,
    width: 75,
  },
  btnContainer: {
    width: 284,
    marginTop: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    lineHeight: 61,
    color: "#424242",
    marginTop: 31,
  },
  terms: {
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 23,
    marginTop: 45,
    textAlign: "center",
  },
  terms_blue: {
    color: "#3A6FD7",
  },
});
