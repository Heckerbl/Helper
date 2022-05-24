import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Nav from "../components/global/Nav";
import globalStyle from "../styles/GlobalStyles";
import Header from "../components/global/Header";
import HelperCard from "../components/global/HelperCard";
import { ContextStore } from "../context/Context";
import NoSearch from "./NoSearch";
import NoResult from "./NoResult";

export default function SearchScreen({ route }) {
  // getting the global states
  const { search } = useContext(ContextStore);
  const [searchData] = search;

  // the text return in the search box.
  const SearchTitle = searchData.searchTerm || "Try searching ";

  const searchOutput = searchData.searchOutput;

  const helper = searchData.searchOutput;
  // user will contain the possible matched results of the searched keyword.

  return (
    <View style={globalStyle.makeSafe}>
      <Header title={SearchTitle} ham={false} notification={true} />

      {searchOutput == "noSearch" ? (
        <NoSearch />
      ) : searchOutput.length == 0 ? (
        <NoResult />
      ) : (
        <ScrollView>
          <View style={[globalStyle.flexCenter, style.helper_container]}>
            {helper.map((user, index) => {
              return <HelperCard user={user} key={index} />;
            })}
          </View>
        </ScrollView>
      )}

      <Nav active={route.name} />
    </View>
  );
}
const style = StyleSheet.create({
  helper_container: {
    paddingBottom: 80,
  },
});
