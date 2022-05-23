import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext } from "react";
import { ContextStore } from "../../context/Context";

export default function PlanBox({ data }) {
  const { id, price } = data;
  const title = data.name;

  // context related things
  const { showPlan, myProfileData } = useContext(ContextStore);
  const [, setShowSetPlan] = showPlan;
  const [myProfile] = myProfileData;

  // when a individual plan is clicked
  const editPlan = () => {
    const clickedPlan = myProfile.plans.find((element) => element.id === id);
    setShowSetPlan(clickedPlan);
  };
  return (
    <Pressable onPress={editPlan}>
      <View style={style.planContainer}>
        <Text style={style.planTitle}>{title}</Text>
        <Text style={style.price}>{price}</Text>
      </View>
    </Pressable>
  );
}
const style = StyleSheet.create({
  planContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
    marginTop: 10,
    width: 292,
    borderRadius: 13,
    paddingHorizontal: 20,
    paddingVertical: 6,
    textAlign: "center",
    backgroundColor: "#E0E0E0",
  },
  planTitle: {
    color: "#6A6A6A",
  },
  price: {
    color: "#6A6A6A",
  },
});
