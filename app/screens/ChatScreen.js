import { View, ScrollView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import globalStyle from "../styles/GlobalStyles";
import Nav from "../components/global/Nav";
import Header from "../components/global/Header";
import MessageContainer from "../components/chat/MessageContainer";
import { useNavigation } from "@react-navigation/native";
import { ContextStore } from "../context/Context";

export default function ChatScreen() {
  const messages = [
    {
      name: "linus tech tips",
      profile: require("../assets/ref.png"),
      lastMsg: {
        you: "Hey there will you help me",
        time: "1652582015078",
        seen: true,
      },
      active: true,
    },
    {
      name: "Mkbhd",
      profile: require("../assets/ref2.png"),
      lastMsg: {
        them: "Where are you pal",
        time: "1652582015078",
        seen: false,
      },
      active: false,
    },
    {
      name: "Elon musk",
      profile: require("../assets/ref3.png"),
      lastMsg: {
        them: "I want to hire you",
        time: "1652582015078",
        seen: true,
      },
      active: true,
    },
    {
      name: "Dr mike",
      profile: require("../assets/ref4.png"),
      lastMsg: {
        you: "Are you a real doc?",
        time: "1652582015078",
        seen: true,
      },
      active: true,
    },
  ];

  const navigator = useNavigation();

  const { usr } = useContext(ContextStore);
  const [user, fn] = usr;
  // const user = data.usr[0];
  if (user == "NOTLOGGEDIN") {
    () => navigator.navigate("LoginScreen");
  }

  return (
    <View style={[globalStyle.makeSafe, style.mainContainer]}>
      <Header ham={false} title="Messages" notification />
      <View style={style.messages}>
        <ScrollView>
          {messages.map((message, index) => {
            return <MessageContainer data={message} key={index} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F3F3F3",
  },
});
