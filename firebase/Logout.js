import firebase from "firebase/compat/app";

import * as Google from "expo-google-app-auth";

export const logout = () => {
  const androidClientId =
    "1022044952512-e6ftm4hklnncd5k59iu819qiu2u3lf0m.apps.googleusercontent.com";
  const result = Google.logOutAsync({
    androidClientId: androidClientId,
  });
  firebase.auth().signOut();
};
