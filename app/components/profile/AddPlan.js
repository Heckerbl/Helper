import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import InputBox from "../global/InputBox";
import ButtonMod from "../global/ButtonMod";
import { ContextStore } from "../../context/Context";

export default function AddPlan({ data }) {
  const { showPlan } = useContext(ContextStore);
  const [showSetPlan, setShowSetPlan] = showPlan;
  const discardChanges = () => {
    setShowSetPlan(false);
  };

  const saveChanges = () => {};
  return (
    <View style={style.mainContainer}>
      {/* the top most container that contains the price and the title of the plan  */}
      <View style={style.titlePrice}>
        <View style={[style.title, style.inpBoxCon]}>
          <Text Style={style.title}>Plan Title</Text>
          <InputBox
            width={142}
            name={"EX: Basic plan"}
            lines={1}
            stateName="name"
            plan
            data={{ id: showSetPlan.id, name: showSetPlan.name || "" }}
          />
        </View>
        <View style={[style.price, style.inpBoxCon]}>
          <Text Style={style.title}>Price</Text>
          <InputBox
            width={142}
            name={"EX: USD $29"}
            lines={1}
            stateName="price"
            data={{ id: showSetPlan.id, price: showSetPlan.price || "" }}
            plan
          />
        </View>
      </View>

      <View style={[style.quote, style.inpBoxCon]}>
        <Text Style={style.title}>Description</Text>
        <InputBox
          width={"100%"}
          name={
            "Enter the description of the plan, What are the features that are going to be included with the plan and some more details about the plan "
          }
          lines={3}
          stateName="description"
          plan
          data={{
            id: showSetPlan.id,
            description: showSetPlan.description || "",
          }}
        />
      </View>

      <View style={[style.wrkres, style.titlePrice]}>
        <View style={[style.work, style.inpBoxCon]}>
          <Text Style={style.title}>Working Time</Text>
          <InputBox
            width={142}
            name={"EX: 10 hours"}
            lines={1}
            plan
            stateName="workingTime"
            data={{
              id: showSetPlan.id,
              workingTime: showSetPlan.workingTime || "",
            }}
          />
        </View>
        <View style={[style.price, style.inpBoxCon]}>
          <Text Style={style.title}>Response</Text>
          <InputBox
            width={142}
            name={"EX: 5-6 times"}
            lines={1}
            stateName="response"
            plan
            data={{ id: showSetPlan.id, response: showSetPlan.response || "" }}
          />
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
