import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import globalStyle from "../styles/GlobalStyles";
import Belsvg from "../assets/belsvg.svg";
import { Belsvgno } from "../assets/bell_no.svg";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title, notification, ham }) {
  // setting the state for the number of new notification
  const newNotif = true;
  const navigator = useNavigation();

  const goBack = () => {
    navigator.goBack();
  };
  return (
    <View style={style.headerContainer}>
      {ham ? <Image source={require("../assets/ham.png")} /> : null}
      <View style={style.title}>
        {title ? (
          <>
            <Pressable onPress={goBack}>
              <Image
                source={require("../assets/arrow.png")}
                style={style.arrow}
              />
            </Pressable>
            <Text style={style.titleText}> {title}</Text>
          </>
        ) : null}
      </View>

      {notification ? (
        <View style={globalStyle.smallIconBox}>
          {newNotif ? (
            <Belsvg />
          ) : (
            // <Image source={require("../assets/notification_z.png")} />
            <Belsvgno />
          )}
        </View>
      ) : null}
    </View>
  );
}

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    width: Dimensions.get("window").width,
    paddingHorizontal: 40,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    marginLeft: 27,
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 27,
  },
});
