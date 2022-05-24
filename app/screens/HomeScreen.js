import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import Header from "../components/global/Header";
import HelperCard from "../components/global/HelperCard";
import Nav from "../components/global/Nav.js";
import SearchBox from "../components/homescreen/SearchBox";
import globalStyle from "../styles/GlobalStyles.js";
import { ContextStore } from "../context/Context";

export default function HomeScreen({ navigation, route }) {
  const { helperData } = useContext(ContextStore);
  const [helper, setHelper] = helperData;

  // const helper = [];

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

        {helper.length > 0 ? (
          <View style={style.helper_container}>
            <Text style={style.title}>New Helper</Text>
            {helper.map((usr, i) => {
              return <HelperCard user={usr} key={i} />;
            })}
            <Text style={style.title}>Popular Helper</Text>
            {helper.map((usr, i) => {
              return <HelperCard user={usr} key={i} />;
            })}
          </View>
        ) : (
          <View style={style.noHelper}>
            <Image
              source={require("../assets/noHelper.webp")}
              style={style.img}
            />
            <Text style={style.text}> !OOPS , No helper found </Text>
          </View>
        )}
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

  img: { width: 300, height: 200 },

  text: {
    fontSize: 18,
    lineHeight: 25,
    color: "#333",
    marginTop: 20,
    maxWidth: 300,
    textAlign: "center",
  },
  noHelper: {
    height: 500,
    // width: "100%",
    maxWidth: 350,
    justifyContent: "center",
    alignItems: "center",
  },
});
