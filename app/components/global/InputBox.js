import { StyleSheet, TextInput } from "react-native";
import React from "react";

export default function InputBox({ name, lines, width }) {
  const style = StyleSheet.create({
    txtInp: {
      width: width || 280,
      backgroundColor: "#E9E9E9",
      height: 33 * lines,
      //   textAlignVertical: "top ",
      paddingHorizontal: 20,
      borderRadius: 13,
      marginTop: 8,
      color: "#6A6A6A",
      fontSize: 14,
    },
  });
  return (
    <TextInput
      style={style.txtInp}
      placeholder={name}
      multiline={lines !== 1}
    />
  );
}
