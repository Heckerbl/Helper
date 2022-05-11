import { View, Text, StyleSheet } from "react-native";
import React from "react";
import globalStyle from "../styles/GlobalStyles";
import ButtonMod from "./ButtonMod.js";

export default function Plan({ data }) {
  const onPress = () => {
    // Function to lunch after the subscribe button is clicked
  };

  // console.log("plans are being executed");
  const { title, price, offer, time, response, tags } = data;
  return (
    <View style={style.main_container}>
      {/* title of the container */}
      <View style={style.title_price}>
        <Text style={style.headerTitle}>{title}</Text>
        <Text style={style.price}>Price :{price}</Text>
      </View>

      {/* the container below it */}
      <View style={style.below_container}>
        {/* offer section */}
        <View style={style.offer_container}>
          <Text style={style.title}>Offer :</Text>
          <Text style={style.des}>{offer}</Text>
        </View>
        {/* time and response section */}
        <View style={style.time_response}>
          {/* time */}
          <View style={style.time_container}>
            <Text style={style.title}>Time :</Text>
            <Text style={style.des}>{time}</Text>
          </View>
          {/* response time */}
          <View style={style.res_container}>
            <Text style={style.title}>Response :</Text>
            <Text style={style.des}>{response}</Text>
          </View>
        </View>

        {/* tags */}
        <View style={style.tags_container}>
          {tags.map((tag, index) => {
            return (
              <View
                style={[style.tag, index != 0 ? style.giveSpace : ""]}
                key={index}
              >
                <Text style={style.tagText}>{tag}</Text>
              </View>
            );
          })}
        </View>

        {/* button */}
        <View style={style.btn}>
          <ButtonMod
            _FN={onPress}
            name="Subscribe"
            height={35}
            width={135}
            color={"#fff"}
            borderRad={23}
            backgroundColor={"#52BF9B"}
          />
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  main_container: {
    marginTop: 100,
    width: 235,
    alignSelf: "center",
    backgroundColor: "#000",
    borderRadius: 24,
    // paddingVertical: 30,
    paddingTop: 23,
    overflow: "hidden",
    marginLeft: 20,
  },
  time_response: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tags_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#e6e6e6",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    marginTop: 20,
  },
  tagText: {
    color: "#6A6A6A",
    fontSize: 10,
    lineHeight: 15,
  },
  giveSpace: {
    marginLeft: 10,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },

  // main styling begins here

  headerTitle: {
    fontWeight: "400",
    fontSize: 23,
    lineHeight: 34,
    textAlign: "center",
    color: "#EFEFEF",
  },
  price: {
    textAlign: "center",
    color: "#BEBEBE",
    fontSize: 10,
    lineHeight: 15,
  },
  below_container: {
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 10,
    paddingVertical: 30,
  },
  time_container: {
    marginTop: 32,
  },
  res_container: {
    marginTop: 32,
  },
  title: {
    fontSize: 12,
    lineHeight: 18,
  },
  des: {
    lineHeight: 15,
    fontSize: 10,
    fontWeight: "100",
    marginTop: 10,
    color: "#6A6A6A",
  },
});
