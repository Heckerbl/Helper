import { View, Text, StyleSheet } from "react-native";
import React from "react";
import globalStyle from "../styles/GlobalStyles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function Button({ name, color, height, width, _FN }) {
  const style = StyleSheet.create({
    btnStyle: {
      color: color,
      height: height,
      width: width,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
  });

  return (
    <View style={[globalStyle.flexCenter, style.btnStyle]}>
      <Pressable onPress={() => _FN}>
        <Text>{"name"}</Text>
      </Pressable>
    </View>
  );
}
