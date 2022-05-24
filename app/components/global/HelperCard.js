import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Star from "../../assets/Star.svg";
import Quote from "../../assets/Quote.svg";
import { getRandomColor } from "../../styles/GlobalStyles.js";
import { useNavigation } from "@react-navigation/native";
export default function HelperCard({ user }) {
  const { id, image, displayName, jobTitle, quote } = user;
  const stars = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  const navigator = useNavigation();

  const handleCardClick = () => {
    navigator.navigate("ProfileScreen", {
      id: id,
      mine: false,
    });
  };

  return (
    <>
      <Pressable onPress={handleCardClick}>
        <View style={style.main_container}>
          <View style={style.title_container}>
            <View style={style.image_container}>
              <View style={style.circle}></View>
              <Image source={{ uri: image }} style={style.img} />
            </View>
            <View style={style.nm_jb}>
              <Text style={style.name}>{displayName}</Text>
              <Text style={style.job}>{jobTitle}</Text>
            </View>
          </View>
          <View style={style.stars}>
            {Array(stars)
              .fill("*")
              .map((e, i) => {
                return <Star style={style.star} key={i} />;
              })}
          </View>
          <View style={style.quote}>
            <Quote style={style.svg_quote} />
            <Text style={style.quote_text}>{quote}</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
}
const style = StyleSheet.create({
  main_container: {
    minHeight: 290,
    width: 350,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 2,
    borderRadius: 17,
  },
  title_container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nm_jb: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 50,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 27,
    color: "#424242",
    textTransform: "capitalize",
  },
  job: {
    // marginTop: 20,
    color: "#6A6A6A",
    fontSize: 16,
  },
  circle: {
    backgroundColor: getRandomColor(),
    borderRadius: 113,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  image_container: {
    position: "relative",
    height: 113,
    width: 113,
    justifyContent: "center",
    alignItems: "center",
  },
  quote: {
    marginTop: 40,
    flexDirection: "row",
    width: 330,
    marginLeft: 20,
  },
  quote_text: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
    color: "#424242",
    marginLeft: 10,
  },
  svg_quote: {
    marginTop: -15,
    marginLeft: -10,
  },
  stars: {
    flexDirection: "row",
  },
  star: {
    marginLeft: 10,
  },
  img: {
    height: 108,
    width: 108,
    borderRadius: 55,
    position: "absolute",
  },
});
