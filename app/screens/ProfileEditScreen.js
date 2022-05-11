import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React from "react";
import globalStyle from "../styles/GlobalStyles";
import Header from "../components/Header";
import Nav from "../components/Nav";
import InputBox from "../components/InputBox";
import ButtonMod from "../components/ButtonMod";
import { useNavigation } from "@react-navigation/native";
import AddPlan from "../components/AddPlan";
const editPlan = () => {};
export default function ProfileEditScreen() {
  const navigator = useNavigation();
  const saveChanges = () => {};
  const discardChanges = () => {};
  const addPlan = () => {
    // open the popup type of tab to add the plans with their details.
  };
  return (
    <View style={[globalStyle.makeSafe, style.main_container]}>
      <Header ham={false} title={"profile > me"} notification></Header>
      {/* all the contents except the header and nav */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[style.content]}>
          {/* name */}
          <View style={[style.name, style.inpBoxCon]}>
            <Text Style={style.title}>Name</Text>
            <InputBox name={"Enter Your Name"} lines={1} />
          </View>

          {/* quote */}

          <View style={[style.quote, style.inpBoxCon]}>
            <Text Style={style.title}>Quote</Text>
            <InputBox
              name={"Enter a quote to show in your profile"}
              lines={2}
            />
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
            marginTop={29}
          />
          {/* save CHanges */}
          <View style={style.btncontainer}>
            <ButtonMod
              color={"#fff"}
              name={"Save"}
              height={35}
              width={110}
              borderRad={13}
              backgroundColor={"#52BF9B"}
              _FN={saveChanges}
            />
            {/* discard changes */}
            <ButtonMod
              color={"#fff"}
              name={"Discard"}
              height={35}
              width={110}
              borderRad={13}
              backgroundColor={"#D45151"}
              marginLeft={10}
              _FN={discardChanges}
            />
          </View>
        </View>
      </ScrollView>

      <Nav active={"ProfileScreen"}> </Nav>
      <AddPlan />
    </View>
  );
}

const style = StyleSheet.create({
  main_container: {
    paddingBottom: 80,
  },
  content: {
    width: "100%",
    // alignItems: "center",
    height: "100%",
    paddingLeft: 40,
  },
  inpBoxCon: {
    marginTop: 30,
  },
  title: {
    fontSize: 12,
    lineHeight: 18,
  },
  btncontainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
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

const planContainer = (title, price) => {
  return (
    <Pressable onPress={editPlan}>
      <View style={style.planContainer}>
        <Text style={style.planTitle}>{title}</Text>
        <Text style={style.price}>{price}</Text>
      </View>
    </Pressable>
  );
};
