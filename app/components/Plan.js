import { View, Text, StyleSheet } from "react-native";
import React from "react";
import globalStyle from "../styles/GlobalStyles";
import Button from "./Button.js";

export default function Plan({ data }) {
  const onPress = () => {};

  // console.log("plans are being executed");
  const { title, price, offer, time, response, tags } = data;
  return (
    <View style={style.main_container}>
      {/* title of the container */}
      <View style={style.title_price}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.price}>{price}</Text>
      </View>

      {/* the container below it */}
      <View style={style.below_container}>
        {/* offer section */}
        <View style={style.offer_container}>
          <Text style={style.title}>Offer</Text>
          <Text style={style.offer}>{offer}</Text>
        </View>
        {/* time and response section */}
        <View style={style.time_response}>
          {/* time */}
          <View style={style.time_container}>
            <Text style={style.title}>Time</Text>
            <Text style={style.time}>{time}</Text>
          </View>
          {/* response time */}
          <View style={style.res_container}>
            <Text style={style.title}>Response</Text>
            <Text style={style.res}>{response}</Text>
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
                <Text>{tag}</Text>
              </View>
            );
          })}
        </View>

        {/* button */}
        <Button
          _FN={onPress}
          name="Subscribe"
          height={10}
          width={100}
          color={"#333"}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  main_container: {
    marginTop: 30,
    width: 235,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 25,
    paddingVertical: 30,
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
  },
  giveSpace: {
    marginLeft: 10,
  },
});
