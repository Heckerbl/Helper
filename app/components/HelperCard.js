import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Star from "../assets/Star.svg";
import Quote from "../assets/Quote.svg";
import { getRandomColor } from "../styles/GlobalStyles.js";
import { useNavigation } from "@react-navigation/native";
export default function HelperCard({ user }) {
  const { image, name, job, stars, quote } = user;
  const navigator = useNavigation();

  const handleCardClick = () => {
    navigator.navigate("ProfileScreen", user);
  };

  return (
    <View style={style.main_container}>
      <View style={style.title_container}>
        <View style={style.image_container}>
          <View style={style.circle}></View>
          <Image source={image} style={style.img} />
        </View>
        <View style={style.nm_jb}>
          <Text style={style.name}>{name}</Text>
          <Text style={style.job}>{job}</Text>
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
  );
}
const style = StyleSheet.create({
  main_container: {
    minHeight: 290,
    width: 350,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor:"#e8e8e8",
    borderBottomWidth:2,
    borderRadius:17,
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
  },
  job: {
    // marginTop: 20,
    color: "#6A6A6A",
    fontSize: 16,
  },
  circle: {
    height: 113,
    width: 113,
    backgroundColor: getRandomColor(),
    borderRadius: 113,
    position: "absolute",
    marginLeft: -2.3,
    marginTop: -2.3,
  },
  image_container: {
    position: "relative",
  },
  quote: {
    marginTop: 40,
    flexDirection: "row",
    width: 330,
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
});
