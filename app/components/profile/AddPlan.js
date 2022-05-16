import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InputBox from "../global/InputBox";
import ButtonMod from "../global/ButtonMod";

export default function AddPlan() {
  return (
    <View style={style.mainContainer}>
      {/* the top most container that contains the price and the title of the plan  */}
      <View style={style.titlePrice}>
        <View style={[style.title, style.inpBoxCon]}>
          <Text Style={style.title}>Plan Title</Text>
          <InputBox width={142} name={"EX: Basic plan"} lines={1} />
        </View>
        <View style={[style.price, style.inpBoxCon]}>
          <Text Style={style.title}>Price</Text>
          <InputBox width={142} name={"EX: USD $29"} lines={1} />
        </View>
      </View>

      <View style={[style.quote, style.inpBoxCon]}>
        <Text Style={style.title}>Quote</Text>
        <InputBox
          width={"100%"}
          name={
            "EX: this is a example quote that is going to be changed later on it is quite large but never mind. It will be fine"
          }
          lines={3}
        />
      </View>

      <View style={[style.wrkres, style.titlePrice]}>
        <View style={[style.work, style.inpBoxCon]}>
          <Text Style={style.title}>Working Time</Text>
          <InputBox width={142} name={"Basic plan"} lines={1} />
        </View>
        <View style={[style.price, style.inpBoxCon]}>
          <Text Style={style.title}>Response</Text>
          <InputBox width={142} name={"Basic plan"} lines={1} />
        </View>
      </View>
      {/* save CHanges */}
      <View style={style.btncontainer}>
        <ButtonMod
          color={"#fff"}
          name={"Save"}
          height={35}
          width={110}
          borderRad={13}
          backgroundColor={"#52BF9B"}

          // _FN={saveChanges}
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
          // _FN={discardChanges}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    minHeight: 300,
    width: "100%",
    backgroundColor: "#fff",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  btncontainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 40,
  },

  title: {
    fontSize: 12,
    lineHeight: 18,
  },
  titlePrice: {
    flexDirection: "row",
  },
  price: {
    marginLeft: 20,
  },
  wrkres: {
    marginTop: 25,
  },
  quote: {
    marginTop: 25,
  },
});
