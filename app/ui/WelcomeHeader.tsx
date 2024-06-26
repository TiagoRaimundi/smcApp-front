import { FC } from "react";
import {
  StyleSheet,
  Image,
  View,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import colors from "../utils/colors";

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
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.subHeading}>{subHeading}</Text>
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
  heading: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 5,
    color: colors.primary,
  },
  subHeading: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 14,
    color: colors.primary,
  }
});

export default WelcomeHeader;
