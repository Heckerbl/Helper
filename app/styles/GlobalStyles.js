import { StyleSheet, Platform, StatusBar } from "react-native";

const globalStyle = StyleSheet.create({
  makeSafe: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  flexCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  smallIconBox: {
    backgroundColor: "#EFEFEF",
    height: 40,
    width: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  button_with_icon: {
    backgroundColor: "#e6e6e6",
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  lightText: {
    color: "#424242",
  },
});
export default globalStyle;

export const getRandomColor = () => {
  const colors = ["#F26A25", "#27BECE", "#52BF9B", "#9B4C9D"];

  const random = parseInt(Math.floor(Math.random() * 5) + 0);
  return colors[random];
};
