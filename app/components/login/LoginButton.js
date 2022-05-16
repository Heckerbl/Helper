import { Text, StyleSheet, TouchableOpacity, Image } from "react-native"; 

export default function LoginButton({ image, text, handleClick }) {
  return (
    <TouchableOpacity onPress={handleClick} style={style.Container}>
      <Image source={image} style={style.img} />
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  Container: {
    width: "100%",
    height: 72,
    backgroundColor: "white",
    paddingHorizontal: 16,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
    borderRadius: 17,
    flexDirection: "row",
  },
  text: {
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 27,
    color: "#6A6A6A",
  },
  img: {
    marginRight: 20,
    height: 40,
    width: 40,
    marginLeft: 50,
  },
});
