import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import globalStyle from "../styles/GlobalStyles";
import Nav from "../components/global/Nav";
import Header from "../components/global/Header";
import Quote from "../assets/Quote.svg";
import MessengerIco from "../assets/mess.svg";
import AddFrn from "../assets/addFrn.svg";
import Plan from "../components/profile/Plan.js";
import EditIcon from "../assets/edit.svg";
import { useNavigation } from "@react-navigation/native";
import { ContextStore } from "../context/Context";
import SetupProfile from "../assets/setupProfile.svg";

// firebase
import { getProfileInfo } from "../../firebase/Profile";
import ButtonMod from "../components/global/ButtonMod";
import { logout } from "../../firebase/Logout";

// things that are needed for firebase
import { dbReference } from "../../firebase/firebase";
import { query, where, onSnapshot, collection } from "firebase/firestore";
import "firebase/compat/firestore";
import "firebase/auth";

// user data reference
// Object {
//   "displayName": "Saroj Regmi",
//   "email": "sarojregmi.official@gmail.com",
//   "phoneNumber": null,
//   "photoURL": "https://lh3.googleusercontent.com/a-/AOh14GjwP_oxD8loPrM9VVerDrn2WmCQ6pqdIPoawFBUcQ=s96-c",
//   "providerId": "google.com",
//   "uid": "108884798923453718918",
// }

export default function ProfileScreen({ route }) {
  // checking if the user is logged in or not
  const { id, mine } = route.params;

  const navigator = useNavigation();

  const { usr, myProfileData, createNew } = useContext(ContextStore);
  const [loggedInUser, setUser] = usr;
  const [myProfile, setMyProfile] = myProfileData;
  const [, setIsNew] = createNew;

  // getting the profile data from the data base
  useEffect(() => {
    if (loggedInUser != "NOTLOGGEDIN") {
      const q = query(
        collection(dbReference, "/profiles"),
        where("id", "==", id)
      );
      onSnapshot(q, (snapshot) => {
        if (snapshot.docs.length > 0) {
          setMyProfile(snapshot.docs[0].data());

          let doc = snapshot.docs[0].id;
          // it means that the profile that contains the doc url too in short docedprofile
          let docedProfile = snapshot.docs[0].data();
          docedProfile.key = doc;

          setMyProfile(docedProfile);
          setIsNew(false);
        }
      });
      console.log(myProfile);
      // setMyProfile(getProfileInfo(loggedInUser.uid));
      // console.log("\n\n\n The value of my profile is ");
    }
  }, []);

  // fetching the profile informaiton from the firbase

  const login = () => navigator.navigate("LoginScreen");

  const notLoggedIn = loggedInUser == "NOTLOGGEDIN";
  // working area now
  let user;
  if (myProfile) {
    user = myProfile;
  } else if (loggedInUser == "NOTLOGGEDIN") {
    user = {
      image:
        "https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png",
      displayName: "New user",
      // quote: "Pc is heart and the heart is heart i need to build it",
    };
  } else {
    user = {
      image: loggedInUser.photoURL,
      displayName: loggedInUser.displayName,
      // quote: "Pc is heart and the heart is heart i need to build it",
    };
  }

  let { displayName, image, quote } = user;
  const active = 1;

  // title, price, offer, time, response, tags;
  // just a reference data not the actual data
  const plans = myProfile && myProfile.plans;

  // [
  //   {
  //     title: "Average plan",
  //     price: "USD 35",
  //     time: "3 Days",
  //     response: "2 times",
  //     tags: ["New Plan", "Popular Plan"],
  //     offer:
  //       "This is the Average plan, this is just above the basic plan. I will do many things in this plan",
  //   },
  //   {
  //     title: "Basic plan",
  //     price: "USD 5",
  //     time: "3 Days",
  //     response: "2 times",
  //     tags: ["New Plan", "Popular Plan"],
  //     offer:
  //       "This is the basic plan, this is just below all the plan. I will only some things in this plan",
  //   },
  //   {
  //     title: "Premium plan",
  //     price: "USD 50",
  //     time: "3 Days",
  //     response: "2 times",
  //     tags: ["New Plan", "Popular Plan"],
  //     offer:
  //       "This is the Premium plan , this is just above all the plan. I will all the  things in this plan",
  //   },
  // ];

  // funciton to open the edit page
  const editProfile = () => {
    navigator.navigate("ProfileEditScreen");
  };

  // for opening the messenger page
  const message = () => {};

  // for adding as a friend
  const addfrn = () => {};

  const handleLogout = () => {
    logout();
    setMyProfile();
    setUser("NOTLOGGEDIN");
  };

  return (
    <View style={[globalStyle.makeSafe, style.main_container]}>
      <Header
        title={"Profile > " + mine ? "Me" : displayName}
        ham={false}
        notification
      />
      <ScrollView>
        <View style={style.contents}>
          {/* the container that contains the profile image name and the quote */}
          <View style={style.upperContainer}>
            <Image
              source={{
                uri: image,
              }}
              style={style.img}
            />

            <View style={style.nm_qt}>
              <Text style={style.name}>{displayName}</Text>

              {/* quote section  */}
              {myProfile ? (
                <View style={style.quote}>
                  <Quote style={style.svg_quote} />
                  <Text style={style.quote_text}>{quote}</Text>
                </View>
              ) : null}
            </View>
          </View>

          {notLoggedIn ? null : (
            <View style={[globalStyle.flexCenter, style.btn_con]}>
              {mine ? (
                myProfile ? (
                  <Pressable
                    style={[globalStyle.button_with_icon, style.edit]}
                    onPress={editProfile}
                  >
                    <Text style={globalStyle.lightText}>Edit profile</Text>
                    <EditIcon />
                  </Pressable>
                ) : (
                  <Pressable
                    style={[globalStyle.button_with_icon, style.edit]}
                    onPress={editProfile}
                  >
                    <Text style={globalStyle.lightText}>Setup profile</Text>
                    <SetupProfile style={style.SetupProfile} />
                  </Pressable>
                )
              ) : (
                <>
                  <Pressable
                    style={[globalStyle.button_with_icon, style.message]}
                    onPress={message}
                  >
                    <Text style={globalStyle.lightText}>Message</Text>
                    <MessengerIco />
                  </Pressable>
                  <Pressable
                    style={[globalStyle.smallIconBox, style.AddFrn]}
                    onPress={addfrn}
                  >
                    <AddFrn />
                  </Pressable>
                </>
              )}
            </View>
          )}

          {/*    name,
    color,
    height,
    width,
    borderRad,
    backgroundColor,
    marginTop,
    marginLeft,
    _FN, */}
          {mine ? (
            notLoggedIn ? (
              <ButtonMod
                color={"#fff"}
                name={"Login"}
                height={35}
                width={110}
                borderRad={13}
                backgroundColor={"#52BF9B"}
                _FN={login}
                style={style.logBtn}
                marginTop={20}
              />
            ) : (
              <ButtonMod
                color={"#fff"}
                name={"Logout"}
                height={35}
                width={110}
                borderRad={13}
                backgroundColor={"#D45151"}
                _FN={handleLogout}
                style={style.logBtn}
                marginTop={20}
              />
            )
          ) : null}

          {notLoggedIn ? null : myProfile ? (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {plans
                ? plans.map((plan, index) => {
                    return <Plan key={index} data={plan} />;
                  })
                : null}
            </ScrollView>
          ) : null}
        </View>
      </ScrollView>
      <Nav active={route.name} />
    </View>
  );
}

const style = StyleSheet.create({
  img: {
    // backgroundColor: "#333",
    borderRadius: 50,
    height: 95,
    width: 95,
  },
  // login and logout btns
  logBtn: {
    alignSelf: "flex-start",
  },

  // setup profile icon
  SetupProfile: {
    marginLeft: 10,
  },
  quote: {
    marginTop: 14,
    flexDirection: "row",
    maxWidth: 100,
    justifyContent: "flex-start",
  },
  quote_text: {
    fontSize: 14,
    lineHeight: 24,
    color: "#424242",
    marginLeft: 3,
  },
  svg_quote: {
    marginTop: -5,
    marginLeft: -2,
  },
  nm_qt: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 50,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 27,
    color: "#424242",
  },
  upperContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  btn_con: {
    flexDirection: "row",
    marginTop: 30,
  },
  AddFrn: {
    marginLeft: 25,
  },
  message: {
    minWidth: 120,
  },
  edit: {
    minWidth: 130,
  },
  contents: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    paddingBottom: 200,
  },
});
