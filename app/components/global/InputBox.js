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

  // local state for the input
  const [input, setInput] = useState("");

  useEffect(() => {
    onload();
  }, []);

  // default loading the data with the previous data from the user inshort loading the previously entered data
  // when the component loads
  let runCount = 0;

  const onload = () => {
    if (data) setInput(data[stateName]);
  };

  // handling the state change on type in the input feild.
  const changeState = (text) => {
    setInput(text);
    let newState = myProfile;

    // checking if the state is a plan input or not
    if (plan) {
      // ok let me see what are the possible cases
      // if the plan is a new one
      // if it is not a new one
      //  for checking if the plan is new one i can check it the id exists in it array of plans
      // if it exists then i can use it to update it
      // or else i can set a new one

      const id = data.id;

      const exists = newState.plans.find((element) => element.id == id);

      if (!exists) {
        // make a new object and append it;
        const newObj = {
          id: id,
          [stateName]: input,
        };
        // setting the newState to its value
        newState.plans.push(newObj);
      } else {
        // what if it already exists
        newState.plans.forEach((element, index) => {
          if (element.id == id) newState.plans[index][stateName] = input;
        });
      }
    } else {
      newState[stateName] = input;
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
      onChangeText={(text) => changeState(text)}
      value={input}
    />
  );
}
