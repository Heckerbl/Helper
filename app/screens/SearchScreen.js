import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Nav from "../components/global/Nav";
import globalStyle from "../styles/GlobalStyles";
import Header from "../components/global/Header";
import HelperCard from "../components/global/HelperCard";

export default function SearchScreen({ route }) {
  // the text return in the search box.
  const SearchTitle = "Graphics Designer";

  // user will contain the possible matched results of the searched keyword.

  const users = [
    {
      image: require("../assets/ref.png"),
      name: "Linus tech tips",
      job: "professional pc builder",
      stars: 4,
      quote: "Pc is heart and the heart is heart i need to build it",
    },
    {
      image: require("../assets/ref.png"),
      name: "Linus tech tips",
      job: "professional pc builder",
      stars: 4,
      quote: "Pc is heart and the heart is heart i need to build it",
    },
    {
      image: require("../assets/ref.png"),
      name: "Linus tech tips",
      job: "professional pc builder",
      stars: 4,
      quote: "Pc is heart and the heart is heart i need to build it",
    },
  ];
  return (
    <View style={globalStyle.makeSafe}>
      <Header title={SearchTitle} ham={false} notification={true} />
      <ScrollView>
        <View style={[globalStyle.flexCenter, style.helper_container]}>
          {users.map((user, index) => {
            return <HelperCard user={user} key={index} />;
          })}
        </View>
      </ScrollView>
      <Nav active={route.name} />
    </View>
  );
}
const style = StyleSheet.create({
  helper_container: {
    paddingBottom: 80,
  },
});
