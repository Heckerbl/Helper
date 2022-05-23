import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import Header from "../components/global/Header";
import HelperCard from "../components/global/HelperCard";
import Nav from "../components/global/Nav.js";
import SearchBox from "../components/homescreen/SearchBox";
import globalStyle from "../styles/GlobalStyles.js";
import { ContextStore } from "../context/Context";

export default function HomeScreen({ navigation, route }) {
  const { helperData } = useContext(ContextStore);
  const [helper, setHelper] = helperData;
  const user = helper;
  // const user = {
  //   image: require("../assets/ref.png"),
  //   name: "Linus tech tips",
  //   job: "professional pc builder",
  //   stars: 4,
  //   quote: "Pc is heart and the heart is heart i need to build it",
  // };
  const stars = 4;

  return (
    <View
      style={[
        globalStyle.makeSafe,
        globalStyle.flexCenter,
        style.main_container,
      ]}
    >
      <Header title={""} notification={true} ham={true} />
      {/* content in the middle of the page */}
      <ScrollView>
        <SearchBox style={style.searchCon} />

        <View style={style.helper_container}>
          <Text style={style.title}>New Helper</Text>
          {user.map((usr, i) => {
            return <HelperCard user={usr} key={i} />;
          })}
          <Text style={style.title}>Popular Helper</Text>
          {user.map((usr, i) => {
            return <HelperCard user={usr} key={i} />;
          })}
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
  main_container: {
    backgroundColor: "#fff",
  },
});
