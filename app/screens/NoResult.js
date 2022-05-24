import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ButtonMod from "../components/global/ButtonMod";
import { useNavigation } from "@react-navigation/native";

export default function NoResult() {
  const navigator = useNavigation();

  return (
    <View style={style.mainContainer}>
      <Image source={require("../assets/search1.jpg")} style={style.img} />
      <Text style={style.text}>!Oops , No Results Found</Text>

      {/* name,
    color,
    height,
    width,
    borderRad,
    backgroundColor,
    marginTop,
    marginLeft,
    _FN, */}

      <ButtonMod
        color={"#fff"}
        name={"Search again"}
        height={35}
        width={150}
        borderRad={13}
        backgroundColor={"#52BF9B"}
        _FN={() => {
          navigator.navigate("HomeScreen");
        }}
        style={style.logBtn}
        marginTop={20}
      />
    </View>
  );
}
const style = StyleSheet.create({
  mainContainer: {
    height: 500,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  img: { width: 300, height: 200 },

  text: {
    fontSize: 18,
    lineHeight: 25,
    color: "#333",
    marginTop: 20,
    maxWidth: 300,
    textAlign: "center",
  },
});
