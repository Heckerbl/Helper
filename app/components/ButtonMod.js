import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import globalStyle from "../styles/GlobalStyles";

export default function ButtonMod(prop) {
  const {
    name,
    color,
    height,
    width,
    borderRad,
    backgroundColor,
    marginTop,
    marginLeft,
    _FN,
  } = prop;
  const style = StyleSheet.create({
    btnStyle: {
      marginTop: 10,
      backgroundColor: backgroundColor,
      height: height,
      width: width,
      borderRadius: borderRad,
      marginTop: marginTop ? marginTop : "auto",
      marginLeft: marginLeft ? marginLeft : 0,
    },
    text: {
      color: color,
    },
  });

  return (
    <View style={[globalStyle.flexCenter, style.btnStyle]}>
      <Pressable onPress={_FN}>
        <Text style={style.text}>{name}</Text>
      </Pressable>
    </View>
  );
}
