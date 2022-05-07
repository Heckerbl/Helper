import {
  View,
  Text,
  StyleSheet,
  Touchable,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import globalStyle from "../styles/GlobalStyles";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Quote from "../assets/Quote.svg";
import MessengerIco from "../assets/mess.svg";
import AddFrn from "../assets/addFrn.svg";
import Plan from "../components/Plan.js";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function ProfileScreen({ route }) {
  const user = {
    image: require("../assets/ref.png"),
    name: "Linus tech tips",
    quote: "Pc is heart and the heart is heart i need to build it",
  };
  const { name, image, quote } = user;

  const active = 1;

  // title, price, offer, time, response, tags;
  // just a reference data not the actual data
  const plans = [
    {
      title: "Average plan",
      price: "USD 35",
      time: "3 Days",
      response: "2 times",
      tags: ["New Plan", "Popular Plan"],
      offer:
        "This is the Average plan, this is just above the basic plan. I will do many things in this plan",
    },
    {
      title: "Basic plan",
      price: "USD 5",
      time: "3 Days",
      response: "2 times",
      tags: ["New Plan", "Popular Plan"],
      offer:
        "This is the basic plan, this is just below all the plan. I will only some things in this plan",
    },
    {
      title: "Premium plan",
      price: "USD 50",
      time: "3 Days",
      response: "2 times",
      tags: ["New Plan", "Popular Plan"],
      offer:
        "This is the Premium plan , this is just above all the plan. I will all the  things in this plan",
    },
  ];

  return (
    <View style={[globalStyle.makeSafe, style.main_container]}>
      <Header title={"Profile > " + user.name} ham={false} />
      <ScrollView>
        <View style={style.contents}>
          {/* the container that contains the profile image name and the quote */}
          <View style={style.upperContainer}>
            <Image source={image} style={style.img} />

            <View style={style.nm_qt}>
              <Text style={style.name}>{name}</Text>
              <View style={style.quote}>
                <Quote style={style.svg_quote} />
                <Text style={style.quote_text}>{quote}</Text>
              </View>
            </View>
          </View>
          <View style={[globalStyle.flexCenter, style.btn_con]}>
            <Pressable style={[globalStyle.button_with_icon, style.message]}>
              <Text>Message</Text>
              <MessengerIco />
            </Pressable>
            <Pressable style={[globalStyle.smallIconBox, style.AddFrn]}>
              <AddFrn />
            </Pressable>
          </View>

          {plans.map((plan, index) => {
            return <Plan key={index} data={plan} />;
          })}
        </View>
      </ScrollView>
      <Nav active={route.name} />
    </View>
  );
}

const style = StyleSheet.create({
  quote: {
    marginTop: 14,
    flexDirection: "row",
    maxWidth: 190,
    justifyContent: "flex-start",
  },
  quote_text: {
    fontSize: 14,
    lineHeight: 24,
    color: "#424242",
    marginLeft: 3,
  },
  svg_quote: {
    marginTop: -5,
    marginLeft: -2,
  },
  nm_qt: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 50,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 27,
    color: "#424242",
  },
  upperContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  btn_con: {
    flexDirection: "row",
    marginTop: 30,
  },
  AddFrn: {
    marginLeft: 25,
  },
  message: {
    minWidth: 120,
  },
  contents: {
    width: "90%",
    alignSelf: "center",
  },
});
