import { StyleSheet, TextInput } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { ContextStore } from "../../context/Context";

export default function InputBox({
  name,
  lines,
  width,
  stateName,
  plan,
  data,
}) {
  // global state that contains the overall profile input data
  const { myProfileData } = useContext(ContextStore);
  const [myProfile, setMyProfile] = myProfileData;

  // handling the state change on type in the input feild.
  const changeState = (text) => {
    let newState;

    if (myProfile) {
      newState = myProfile;
    } else {
      newState = {
        plans: [],
      };
    }

    // checking if the state is a plan input or not
    if (plan) {
      // ok let me see what are the possible cases
      // if the plan is a new one
      // if it is not a new one
      //  for checking if the plan is new one i can check it the id exists in it array of plans
      // if it exists then i can use it to update it
      // or else i can set a new one

      const id = data.id;
      let exists;
      if (newState.plans) {
        exists = newState.plans.find((element) => element.id == id);
      } else {
        exists = false;
        newState.plans = [];
      }

      if (!exists) {
        // make a new object and append it;
        const newObj = {
          id: id,
          [stateName]: text,
        };
        // setting the newState to its value
        newState.plans.push(newObj);
      } else {
        // what if it already exists
        newState.plans.forEach((element, index) => {
          if (element.id == id) newState.plans[index][stateName] = text;
        });
      }
    } else {
      newState[stateName] = text;
    }
    setMyProfile(newState);
  };

  const style = StyleSheet.create({
    txtInp: {
      width: width || 280,
      backgroundColor: "#E9E9E9",
      height: 33 * lines,
      //   textAlignVertical: "top ",
      paddingHorizontal: 20,
      borderRadius: 13,
      marginTop: 8,
      color: "#6A6A6A",
      fontSize: 14,
    },
  });
  return (
    <TextInput
      style={style.txtInp}
      placeholder={name}
      multiline={lines !== 1}
      onChangeText={changeState}
      defaultValue={data ? data[stateName] : ""}
    />
  );
}
