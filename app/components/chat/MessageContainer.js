import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Online from "../../assets/active.svg";
import Offline from "../../assets/inactive.svg";
import { useNavigation } from "@react-navigation/native";

export default function MessageContainer({ data }) {
  const calculateMsgSentTime = (timestamp) => {
    return parseInt((new Date() - timestamp) / 60000);
  };
  const seen = data.lastMsg.seen;
  let colorPalat;
  const navigator = useNavigation();

  const openChat = () => {
    navigator.navigate("IndividualChatScreen", {
      user: data,
    });
  };

  if (seen) {
    colorPalat = {
      title: "#424242",
      para: "#6A6A6A",
      background: "#E6E6E6",
    };
  } else {
    colorPalat = {
      title: "#000",
      para: "#000",
      background: "#fff",
    };
  }

  const style = StyleSheet.create({
    mainContainer: {
      flexDirection: "row",
      paddingHorizontal: 16,
      paddingVertical: 12,
      alignItems: "center",
      backgroundColor: colorPalat.background,
      marginTop: 5,
    },
    imgContainer: {
      position: "relative",
    },
    image: {
      position: "absolute",
      height: 87,
      width: 87,
    },

    nameContainer: {
      height: 58,
      flexDirection: "column",
      justifyContent: "space-around",
      marginLeft: 23,
      // width: "90%",
      width: Dimensions.get("window").width - 220,
    },

    time: {
      marginLeft: 20,
    },
    title: {
      color: colorPalat.title,
      fontSize: 17,
      fontWeight: "bold",
      lineHeight: 20,
    },

    para: {
      color: colorPalat.para,
      fontSize: 12,
    },
    timestamp: {
      color: colorPalat.title,
      fontSize: 14,
    },
  });

  return (
    <>
      <Pressable onPress={openChat}>
        <View style={style.mainContainer}>
          {/* image and active*/}
          <View style={style.imgContainer}>
            <Image source={data.profile} style={style.image} />
            <View style={style.svg}>
              {data.active ? <Online /> : <Offline />}
            </View>
          </View>

          {/* name and last msg */}
          <View style={style.nameContainer}>
            <View style={style.name}>
              <Text numberOfLines={1} style={style.title}>
                {data.name}
              </Text>
            </View>
            <View style={style.lastMsg}>
              {data.lastMsg.you ? (
                <Text numberOfLines={1} style={style.para}>
                  You :{data.lastMsg.you}
                </Text>
              ) : (
                <Text numberOfLines={1} style={style.para}>
                  {data.lastMsg.them}
                </Text>
              )}
            </View>
          </View>

          {/* timestamp */}
          <View style={style.time}>
            <Text style={style.timestamp}>
              {calculateMsgSentTime(data.lastMsg.time)} min
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
}
