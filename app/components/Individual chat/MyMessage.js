import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
let borderRad = [
  [20, 20, 20, 0],
  [20, 20, 20, 20],
  [20, 0, 20, 20],
  [20, 0, 20, 0],
];

export default function myMessage({ data }) {
  const style = StyleSheet.create({
    msg_ind_container: {
      // borderRadius: borderRad[index],
      // index 0 means top left is set to zero and the index 1 means it is rounded 20 px allsides and if it is 2 then it is the last message so it has it's bottom left border zero.
      backgroundColor: "#1877F2",
      maxWidth: Dimensions.get("window").width * 0.75,
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderTopLeftRadius: borderRad[data.index][0],
      borderTopRightRadius: borderRad[data.index][1],
      borderBottomLeftRadius: borderRad[data.index][2],
      borderBottomRightRadius: borderRad[data.index][3],
      marginRight: 10,
    },
    mainContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      width: "100%",
      marginTop: 3,
      paddingBottom: data.index == 2 || data.index == 1 ? 20 : 0,
    },
    message: {
      fontSize: 18,
      color: "#fff",
    },
  });

  return (
    <View style={style.mainContainer}>
      <View style={[style.msg_ind_container]}>
        <Text style={style.message}>{data.msg}</Text>
      </View>
    </View>
  );
}
