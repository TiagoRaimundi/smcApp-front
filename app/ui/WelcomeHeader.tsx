import { FC } from "react";
import {
  StyleSheet,
  Image,
  View,
  Platform,
  StatusBar,
  Text,
} from "react-native";

interface Props {}

const heading = "Online Marketplace for used Goods"
const subHeading = "Buy or sell used goods with trust. Chat directly with sellers"

const WelcomeHeader: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/hero.png")}
        style={styles.image}
        resizeMode="contain"
        resizeMethod="resize"
      />
      <Text>{heading}</Text>
      <Text>{subHeading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default WelcomeHeader;
