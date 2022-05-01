import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F6",
    flex: 1,
  },
});
