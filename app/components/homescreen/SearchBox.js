import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import Search from "../../assets/search_btn.svg";
import { ContextStore } from "../../context/Context";
import { useNavigation } from "@react-navigation/native";

export default function SearchBox() {
  // importing the global state
  const { search, helperData } = useContext(ContextStore);
  const [helper] = helperData;
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

  // this will return a search result output array for the given terms
  const SearchHelper = (searchTerm) => {
    const searchArray = formatSearch(searchTerm);

    const searchedHelper = [];
    console.log(helper);

    helper.filter((item) => {
      searchArray.forEach((search) => {
        if (item) {
          // checks for the matching name
          if (item.displayName)
            item.displayName.toLowerCase().includes(search) &&
              searchedHelper.push(item);

          // checks for the matching quote
          if (item.quote)
            item.quote.toLowerCase().includes(search) &&
              searchedHelper.push(item);

          // checks for the matching jobTitle
          if (item.jobTitle)
            item.jobTitle.toLowerCase().includes(search) &&
              searchedHelper.push(item);
        }
      });
    });

    // set is easier to use when you need to make the data unique
    const uniqueSearchResult = new Set(searchedHelper);
    const outputArray = [];
    uniqueSearchResult.forEach((item) => {
      outputArray.push(item);
    });
    return outputArray;
  };

  const formatSearch = (term) => {
    // objective
    // the searchterm shoud be converted to lowercase and then splited from the spaces to find the different words

    // changing to lower case
    const properCase = term.toLowerCase();

    // spliting the search term by spaces
    const splitedSearch = properCase.split(" ");

    // returning the splited search array
    return splitedSearch;
  };

  const submitData = () => {
    // fetching the data and setting in the global state
    // getting the previous state to the new state
    const newState = searchData;
    // setting the output by js filtering data to lowercase split and compare
    newState.searchOutput = SearchHelper(newState.searchTerm);
    // finnally settin the global state
    setSearchData(newState);

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
      <Pressable style={[style.searchIcoCon]} onPress={submitData}>
        <Search height={20} width={20} />
      </Pressable>
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
