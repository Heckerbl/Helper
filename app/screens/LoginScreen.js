import { Text, View, StyleSheet, Image } from "react-native";
import LoginButton from "../components/login/LoginButton";
import { ContextStore } from "../context/Context";
import { useContext } from "react";
import firebase from "firebase/compat/app";
import * as Google from "expo-google-app-auth";

export default function LoginScreen() {
  const { usr } = useContext(ContextStore);
  const androidClientId =
    "1022044952512-e6ftm4hklnncd5k59iu819qiu2u3lf0m.apps.googleusercontent.com";
  const handleFacebook = () => {};
  const handleGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: androidClientId,
      });

      // reference blog
      //
      //javascript.plainenglish.io/react-native-firebase-adding-google-authenticaton-in-an-expo-project-2-ed20cb440732

      https: if (result.type == "success") {
        console.log(result);
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
