import { View, Text } from "react-native";
import React from "react";
import globalStyle from "../styles/GlobalStyles";
import Nav from "../components/Nav";
import Header from "../components/Header";

export default function ChatScreen({ route }) {
  return (
    <View style={globalStyle.makeSafe}>
      {/* <Header ham={false} title="Chat" /> */}
      <Text>ChatScreen</Text>
      <Nav active={route.name} />
    </View>
  );
}
