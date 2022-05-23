import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useContext } from "react";
import globalStyle from "../styles/GlobalStyles";
import Header from "../components/global/Header";
import Nav from "../components/global/Nav";
import InputBox from "../components/global/InputBox";
import ButtonMod from "../components/global/ButtonMod";
import { useNavigation } from "@react-navigation/native";
import AddPlan from "../components/profile/AddPlan";
// context
import { ContextStore } from "../context/Context";
import PlanBox from "../components/profile/PlanBox";
import { setNewProfile, updateTheProfile } from "../../firebase/Profile";

export default function ProfileEditScreen() {
  // navigator
  const navigator = useNavigation();

  // context related things
  const { showPlan, myProfileData, usr, createNew } = useContext(ContextStore);
  const [showSetPlan, setShowSetPlan] = showPlan;
  const [myProfile, setMyProfile] = myProfileData;
  const [loggedInUser] = usr;
  const [isNew] = createNew;

  // for pushing the changes to the backend and the database
  const saveChanges = () => {
    // ok after we hit save we must now send the data to the firebase for that i will have to change the data and add a id in it. for knowing whose profile is  it.

    // we will need to check if the profile already exists or not if it does we need to update it or else create a new record
    // const id = loggedInUser.uid;
    // if the profile is new profile then it is fair that the new document must be created in the database
    if (isNew) {
      const newProfile = { id: "", ...myProfile };
      newProfile.id = loggedInUser.uid;
      newProfile.image = loggedInUser.photoURL;
      // sets the state
      setMyProfile(newProfile);
      console.log(newProfile);

      // sets the data in the database firebase
      setNewProfile(myProfile);

      navigator.goBack();
      Alert.alert("Congrats", "Your profile has been setup successfully");
    } else {
      updateTheProfile(myProfile.key, myProfile);
      navigator.goBack();
      Alert.alert("Congrats", "Your profile has been updated successfully");
    }
  };

  // when the discard btn is pressed in the profile page.
  const discardChanges = () => {
    navigator.goBack();
  };
  const addMoreplans = () => {
    // the plans is show set plans is set to an empty object since there is no data when the user first clicks add more plan
    setShowSetPlan({
      id: new Date().toISOString(),
      name: "",
      price: "",
      description: "",
      workingTime: "",
      response: "",
    });
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
            <InputBox
              name={"Enter Your Name"}
              lines={1}
              stateName={"displayName"}
              data={{ displayName: myProfile ? myProfile.displayName : "" }}
            />
          </View>

          {/* quote */}

          <View style={[style.quote, style.inpBoxCon]}>
            <Text Style={style.title}>Quote</Text>
            <InputBox
              name={"Enter a quote to show in your profile"}
              lines={2}
              stateName={"quote"}
              data={{ quote: myProfile ? myProfile.quote : "" }}
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
              stateName={"jobTitle"}
              data={{ jobTitle: myProfile ? myProfile.jobTitle : "" }}
            />
          </View>

          {/* plans */}
          <View style={[style.plan, style.inpBoxCon]}>
            <Text Style={style.title}>Plans</Text>

            {myProfile && myProfile.plans
              ? myProfile.plans.map((plan, index) => {
                  return <PlanBox data={plan} key={index} />;
                })
              : null}
          </View>

          {/* addMoreplans */}
          <ButtonMod
            name={"Add more plan"}
            color={"#fff"}
            height={35}
            width={200}
            borderRad={13}
            backgroundColor={"#000"}
            _FN={addMoreplans}
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

      {showSetPlan ? <AddPlan /> : null}
      {/*  */}
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
});
