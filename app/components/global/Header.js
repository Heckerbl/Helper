import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import globalStyle from "../../styles/GlobalStyles";
import Belsvg from "../../assets/belsvg.svg";
import AudioCall from "../../assets/audioCall.svg";
import VideoCall from "../../assets/videoCall.svg";
import { Belsvgno } from "../../assets/bell_no.svg";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title, notification, ham, chat, chatData }) {
  // setting the state for the number of new notification
  const newNotif = true;
  const navigator = useNavigation();

  const goBack = () => {
    navigator.goBack();
  };

  // styles
  const style = StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      height: 70,
      width: Dimensions.get("window").width,
      paddingHorizontal: chat ? 10 : 40,
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
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    img: {
      height: 52,
      width: 52,
    },
    NameActive: {
      marginLeft: 20,
    },
    Name: {
      fontSize: 18,
      lineHeight: 27,
      minWidth: 130,
    },
    Active: {
      fontSize: 10,
    },
  });

  return (
    <View style={style.headerContainer}>
      {ham ? <Image source={require("../../assets/ham.png")} /> : null}
      {title ? (
        <View style={style.title}>
          <Pressable onPress={goBack}>
            <Image
              source={require("../../assets/arrow.png")}
              style={style.arrow}
            />
          </Pressable>
          <Text style={style.titleText}> {title}</Text>
        </View>
      ) : null}

      {notification ? (
        <Pressable>
          <View style={globalStyle.smallIconBox}>
            {newNotif ? <Belsvg /> : <Belsvgno />}
          </View>
        </Pressable>
      ) : null}

      {chat ? (
        <>
          {/* the name and the title container  */}

          <Pressable onPress={goBack}>
            <Image
              source={require("../../assets/arrow.png")}
              style={style.arrow}
            />
          </Pressable>
          <View style={style.titleContainer}>
            <Image source={chatData.image} style={style.img} />
            <View style={style.NameActive}>
              <Text style={style.Name} numberOfLines={1}>
                {chatData.name}
              </Text>
              <Text style={style.Active} numberOfLines={1}>
                {chatData.active}
              </Text>
            </View>
          </View>

          <Pressable>
            <View style={globalStyle.smallIconBox}>
              <AudioCall />
            </View>
          </Pressable>

          <Pressable>
            <View style={globalStyle.smallIconBox}>
              <VideoCall />
            </View>
          </Pressable>
        </>
      ) : null}
    </View>
  );
}
