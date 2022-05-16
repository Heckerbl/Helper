import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";

import Camera from "../../assets/camera.svg";
import Emoji from "../../assets/emoji.svg";
import Heart from "../../assets/heart.svg";
import globalStyle from "../../styles/GlobalStyles";

export default function BottomControlPannel() {
  return (
    <View style={style.mainContainer}>
      {/* camera */}
      <View style={[style.camera, globalStyle.smallIconBox]}>
        <Pressable>
          <Camera />
        </Pressable>
      </View>
      {/* search box */}
      <Pressable>
        <View style={[style.searchBox]}>
          <TextInput
            style={style.inputBox}
            placeholder="Aa..."
            placeholderTextColor={"#424242"}
          />
          <Emoji style={style.emoji} />
        </View>
      </Pressable>

      {/* heart */}
      <View style={[style.heart, globalStyle.smallIconBox]}>
        <Pressable>
          <Heart />
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 70,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  searchBox: {
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.5,
    position: "relative",
    flex: 1,
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#EFEFEF",
  },

  inputBox: {
    width: "100%",
    paddingHorizontal: 10,
    paddingRight: 33,
  },
  emoji: {
    position: "absolute",
    right: 10,
  },
});
