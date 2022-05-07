import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Home from "../assets/home.svg";
import Home_active from "../assets/home_a.svg";
import Chat from "../assets/chat.svg";
import Chat_active from "../assets/chat_a.svg";
import Profile from "../assets/profile.svg";
import Profile_active from "../assets/profile_a.svg";
import ActiveBar from "../assets/active_bar.svg";
import Search from "../assets/search.svg";
import Search_active from "../assets/search_a.svg";
import { useNavigation } from "@react-navigation/native";

export default function Nav({ active }) {
  const navigation = useNavigation();
  return (
    <View style={style.mainContainer}>
      <TouchableOpacity
        style={active == "HomeScreen" ? style.active : style.normal}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        {active == "HomeScreen" ? (
          <View style={style.active_icon_con}>
            <Home_active />
            <ActiveBar style={style.active_bar} />
          </View>
        ) : (
          <Home />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={active == "SearchScreen" ? style.active : style.normal}
        onPress={() => {
          navigation.navigate("SearchScreen");
        }}
      >
        {active == "SearchScreen" ? (
          <View style={style.active_icon_con}>
            <Search_active />
            <ActiveBar style={style.active_bar} />
          </View>
        ) : (
          <Search />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={active == "ChatScreen" ? style.active : style.normal}
        onPress={() => {
          navigation.navigate("ChatScreen");
        }}
      >
        {active == "ChatScreen" ? (
          <View style={style.active_icon_con}>
            <Chat_active />
            <ActiveBar style={style.active_bar} />
          </View>
        ) : (
          <Chat />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={active == "ProfileScreen" ? style.active : style.normal}
        onPress={() => {
          navigation.navigate("ProfileScreen");
        }}
      >
        {active == "ProfileScreen" ? (
          <View style={style.active_icon_con}>
            <Profile_active />
            <ActiveBar style={style.active_bar} />
          </View>
        ) : (
          <Profile />
        )}
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 80,
    backgroundColor: "white",
    borderTopStartRadius: 35,
    borderTopRightRadius: 35,
  },
  active_icon_con: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  active_bar: {
    marginTop: 10,
  },
});
