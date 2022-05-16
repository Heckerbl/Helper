import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import globalStyle from "../styles/GlobalStyles";
import Nav from "../components/global/Nav";
import Header from "../components/global/Header";
import Quote from "../assets/Quote.svg";
import MessengerIco from "../assets/mess.svg";
import AddFrn from "../assets/addFrn.svg";
import Plan from "../components/profile/Plan.js";
import EditIcon from "../assets/edit.svg";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen({ route }) {
  const user = {
    image: require("../assets/ref.png"),
    name: "Linus tech tips",
    quote: "Pc is heart and the heart is heart i need to build it",
  };
  const { name, image, quote } = user;

  const active = 1;

  const usr = "Linus tech tips";
  const mineProfile = () => {
    return usr === user.name;
  };
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

  const navigator = useNavigation();

  // funciton to open the edit page
  const editProfile = () => {
    navigator.navigate("ProfileEditScreen");
  };

  // for opeingin the messenger page
  const message = () => {};

  // for adding as a friend
  const addfrn = () => {};

  return (
    <View style={[globalStyle.makeSafe, style.main_container]}>
      <Header
        title={"Profile > " + mineProfile() ? "Me" : user.name}
        ham={false}
        notification
      />
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
            {mineProfile() ? (
              <Pressable
                style={[globalStyle.button_with_icon, style.edit]}
                onPress={editProfile}
              >
                <Text style={globalStyle.lightText}>Edit profile</Text>
                <EditIcon />
              </Pressable>
            ) : (
              <>
                <Pressable
                  style={[globalStyle.button_with_icon, style.message]}
                  onPress={message}
                >
                  <Text style={globalStyle.lightText}>Message</Text>
                  <MessengerIco />
                </Pressable>
                <Pressable
                  style={[globalStyle.smallIconBox, style.AddFrn]}
                  onPress={addfrn}
                >
                  <AddFrn />
                </Pressable>
              </>
            )}
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {plans.map((plan, index) => {
              return <Plan key={index} data={plan} />;
            })}
          </ScrollView>
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
    maxWidth: 100,
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
  edit: {
    minWidth: 130,
  },
  contents: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    paddingBottom: 200,
  },
});
