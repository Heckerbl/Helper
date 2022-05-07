import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Search from "../assets/search_btn.svg";
export default function SearchBox() {
  return (
    <View style={style.container}>
      <TextInput placeholder="What help do you need" style={style.inputBox} />
      <TouchableOpacity style={[style.searchIcoCon]}>
        <Search height={20} width={20} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    maxWidth: 378,
    overflow: "hidden",
    borderRadius: 17,
    alignItems: "center",
    marginTop: 50,
  },
  inputBox: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  searchIcoCon: {
    height: "100%",
    width: 48,
    backgroundColor: "#82E7F1",
    justifyContent: "center",
    alignItems: "center",
  },
});
