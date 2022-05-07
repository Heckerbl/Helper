import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import HelperCard from "../components/HelperCard";
import Nav from "../components/Nav.js";
import safeAreaView from "../styles/GlobalStyles.js";
import SearchBox from "../components/SearchBox";
import globalStyle from "../styles/GlobalStyles.js";

export default function HomeScreen({ navigation, route }) {
  const user = {
    image: require("../assets/ref.png"),
    name: "Linus tech tips",
    job: "professional pc builder",
    stars: 4,
    quote: "Pc is heart and the heart is heart i need to build it",
  };

  return (
    <View style={[ globalStyle.makeSafe ,globalStyle.flexCenter]}>
      <Header title={""} notification={true} ham={true} />
      {/* content in the middle of the page */}
      <ScrollView>
        <SearchBox style={style.searchCon} />

        <View style={style.helper_container}>
          <Text style={style.title}>New Helper</Text>
          <HelperCard user={user} />
          <Text style={style.title}>Popular Helper</Text>
          <HelperCard user={user} />
        </View>
      </ScrollView>
      <Nav active={route.name} navigation={navigation} />
    </View>
  );
}
const style = StyleSheet.create({
  helper_container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginTop: 48,
    paddingBottom: 80,
  },
  title: {
    width: 350,
    marginTop: 20,
  },

   
});
