import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import Search from "../../assets/search_btn.svg";
import { ContextStore } from "../../context/Context";
import { useNavigation } from "@react-navigation/native";

// firebase imports
import { dbReference } from "../../../firebase/firebase";
import { query, where, onSnapshot, collection } from "firebase/firestore";
import "firebase/compat/firestore";

export default function SearchBox() {
  // importing the global state
  const { search } = useContext(ContextStore);
  const [searchData, setSearchData] = search;

  // navigation
  const navigator = useNavigation();

  // once enter is pressed or search is pressed
  const handleState = (text) => {
    // setting up the global search state
    const newState = searchData;
    newState.searchTerm = text;
    setSearchData(newState);
  };

  const submitData = () => {
    // fetching the data and setting in the global state

    // navigating to the seach output screen
    navigator.navigate("SearchScreen");
  };

  return (
    <View style={style.container}>
      <TextInput
        placeholder="What help do you need"
        style={style.inputBox}
        onChangeText={handleState}
      />
      <TouchableOpacity style={[style.searchIcoCon]} onPress={submitData}>
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
    backgroundColor: "#EFEFEF",
  },
  searchIcoCon: {
    height: "100%",
    width: 48,
    backgroundColor: "#82E7F1",
    justifyContent: "center",
    alignItems: "center",
  },
});
