import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import globalStyle from "../styles/GlobalStyles";
import Header from "../components/Header";
import Nav from "../components/Nav";
import InputBox from "../components/InputBox";
import ButtonMod from "../components/ButtonMod";
export default function ProfileEditScreen({ route }) {
  const saveChanges = () => {};
  const discardChanges = () => {};
  const addPlan = () => {};
  return (
    <View style={[globalStyle.makeSafe, style.main_container]}>
      <Header ham={false} title={"profile > me"} notification></Header>
      {/* all the contents except the header and nav */}
      <View style={[style.content]}>
        {/* name */}
        <View style={[style.name, style.inpBoxCon]}>
          <Text Style={style.title}>Name</Text>
          <InputBox name={"Enter Your Name"} lines={1} />
        </View>

        {/* quote */}

        <View style={[style.quote, style.inpBoxCon]}>
          <Text Style={style.title}>Quote</Text>
          <InputBox name={"Enter a quote to show in your profile"} lines={3} />
        </View>

        {/* jobTitle */}
        <View style={[style.jonTitle, style.inpBoxCon]}>
          <Text Style={style.title}>Job Title</Text>
          <InputBox
            name={
              "Enter your qualification and experties so that people can find your talent and hire you."
            }
            lines={3}
          />
        </View>

        {/* plans */}
        <View style={[style.plan, style.inpBoxCon]}>
          <Text Style={style.title}>Plans</Text>
          {planContainer("Average Plan", "USD $16")}
          {planContainer("Premium Plan", "USD $36")}
        </View>

        {/* addplan */}
        <ButtonMod
          name={"Add more plan"}
          color={"#fff"}
          height={35}
          width={200}
          borderRad={13}
          backgroundColor={"#000"}
          _FN={addPlan}
        />
        {/* save CHanges */}
        <ButtonMod
          color={"#fff"}
          name={"Save changes"}
          height={50}
          width={132}
          borderRad={13}
          backgroundColor={"#52BF9B"}
          _FN={saveChanges}
        />
        {/* discard changes */}
        <ButtonMod
          color={"#fff"}
          name={"Discard changes"}
          height={50}
          width={132}
          borderRad={13}
          backgroundColor={"#D45151"}
          _FN={discardChanges}
        />
      </View>

      <Nav active={"ProfileScreen"}> </Nav>
    </View>
  );
}

const style = StyleSheet.create({
  main_container: {},
  content: {
    paddingBottom: 100,
  },
});

export const planContainer = (title, price) => {
  return (
    <View style={style.planContainer}>
      <Pressable>
        <View>
          <Text style={style.planTitle}>{title}</Text>
          <Text style={style.price}>{price}</Text>
        </View>
      </Pressable>
    </View>
  );
};
