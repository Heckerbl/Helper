import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SearchScreen from "./app/screens/SearchScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import ProfileEditScreen from "./app/screens/ProfileEditScreen";
import IndividualChatScreen from "./app/screens/IndividualChatScreen.js";
import ChatScreen from "./app/screens/ChatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";

// context

import Context from "./app/context/Context";

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <Context>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false, animation: "none" }}
          ></stack.Screen>
          <stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false, animation: "none" }}
          ></stack.Screen>
          <stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ headerShown: false, animation: "none" }}
          ></stack.Screen>
          <stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false, animation: "none" }}
          ></stack.Screen>
          <stack.Screen
            name="ProfileEditScreen"
            component={ProfileEditScreen}
            options={{ headerShown: false, animation: "none" }}
          ></stack.Screen>
          <stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{ headerShown: false, animation: "none" }}
          ></stack.Screen>
          <stack.Screen
            name="IndividualChatScreen"
            component={IndividualChatScreen}
            options={{ headerShown: false, animation: "slide_from_right" }}
          ></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
