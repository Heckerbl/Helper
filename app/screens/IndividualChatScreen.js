import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import globalStyle from "../styles/GlobalStyles.js";
import Header from "../components/global/Header.js";
import TheirMessage from "../components/Individual chat/TheirMessage.js";
import MyMessage from "../components/Individual chat/MyMessage.js";
import BottomControlPannel from "../components/chat/BottomControlPannel.js";

export default function IndividualChatScreen({ route }) {
  const { user } = route.params;
  const messages = [
    { sender: "mine", message: "hello" },
    { sender: "mine", message: "how are you?" },
    { sender: "mine", message: "hello" },
    {
      sender: "their",
      message:
        "yes, bro sry for late reply. I was just chilling with someone you know.",
    },
    { sender: "their", message: "I am fine and how are you doing?" },
    { sender: "mine", message: "doing fine and you?" },
    { sender: "their", message: "Same same." },
  ];

  // this function figures out which user to render which accepts a number that defines the messages border radius
  const figureUser = (number, index, message) => {
    return messages[index].sender === "mine" ? (
      <MyMessage
        data={{
          index: number,
          msg: message,
        }}
        key={index}
      />
    ) : (
      <TheirMessage
        data={{
          index: number,
          msg: message,
          image: user.profile,
        }}
        key={index}
      />
    );
  };
  const calculateInd = (index) => {
    // ok the previous user must be calculate if the index is not zero that means it is the first user.
    let previous_user = index && messages[index - 1].sender;
    let current_user = messages[index].sender;
    // and the next user must be calculate only if the index+1 is not equal to the length of the array which means that the current user is not the last user.
    let next_user = index + 1 != messages.length && messages[index + 1].sender;

    // cases
    // first message
    // middle   message
    // last message
    // single message
    // note
    // 0: first message
    // 1: for the single message
    // 2: last message
    // 3: middle message
    //
    // for first message
    // no previous user means it is the first message
    // next_user == current_user means that the user is repeated.
    if (previous_user != current_user && next_user == current_user)
      return figureUser(0, index, messages[index].message);

    // for middle message
    // if all the users of the messages are same then it will be a middle message
    if (previous_user == current_user && current_user == next_user)
      return figureUser(3, index, messages[index].message);

    // if next user is not equal to the current user but the previous user is equal to the current user it means that it is the last message of a repeated message so the index 2 is used.
    if (next_user != current_user && current_user == previous_user)
      return figureUser(2, index, messages[index].message);

    // for the single message
    if ((next_user != current_user) != previous_user)
      return figureUser(1, index, messages[index].message);
  };
  return (
    <View style={[globalStyle.makeSafe, style.mainContainer]}>
      <Header
        ham={false}
        chat={true}
        chatData={{ image: user.profile, name: user.name, active: "5min ago" }}
      />

      {/* chat area  */}
      <View style={style.chatArea}>
        <ScrollView style={style.ScrollView}>
          {messages.map((msg, index) => {
            // for calculating the index of the msg like first last and middle one for the border radius to change accordingly..
            return calculateInd(index);
          })}
        </ScrollView>
      </View>

      {/* bottom section that contains all the controls */}

      <BottomControlPannel />
    </View>
  );
}
const style = StyleSheet.create({
  chatArea: {
    height: Dimensions.get("screen").height,
    paddingBottom: 100,
  },
});
