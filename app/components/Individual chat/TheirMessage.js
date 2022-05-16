import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
let borderRad = [
  [20, 20, 0, 20],
  [20, 20, 20, 20],
  [0, 20, 20, 20],
  [0, 20, 0, 20],
];

export default function TheirMessage({ data }) {
  const style = StyleSheet.create({
    msg_ind_container: {
      backgroundColor: "#fff",
      maxWidth: Dimensions.get("window").width * 0.75,
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderTopLeftRadius: borderRad[data.index][0],
      borderTopRightRadius: borderRad[data.index][1],
      borderBottomLeftRadius: borderRad[data.index][2],
      borderBottomRightRadius: borderRad[data.index][3],
      marginLeft: 60,
    },
    mainContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      marginTop: 3,
      paddingBottom: data.index == 2 || data.index == 1 ? 20 : 0,
    },
    message: {
      fontSize: 18,
    },
    image: {
      height: 52,
      width: 52,
      marginTop: -30,
      marginLeft: 10,
    },
  });

  return (
    <>
      <View style={style.mainContainer}>
        <View style={[style.msg_ind_container]}>
          <Text style={style.message}>{data.msg}</Text>
        </View>
      </View>
      {data.index == 2 || data.index == 1 ? (
        <Image source={data.image} style={style.image} />
      ) : null}
    </>
  );
}
