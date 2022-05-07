import { Text, View, StyleSheet, Image, Button } from "react-native";
import LoginButton from "../components/LoginButton";
import globalStyle from "../styles/GlobalStyles";

export default function LoginScreen() {
  const handleFacebook = () => {};
  const handleGoogle = () => {};
  return (
    <View style={(style.mainContainer)}>
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
