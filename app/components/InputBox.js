import { StyleSheet, TextInput } from "react-native";
import React from "react";

export default function InputBox({ name, lines }) {
  const style = StyleSheet.create({});
  return (
    <TextInput style={style.txtInp} placeholder={name} numberOfLines={lines} />
  );
}
