import { FC } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import WelcomeHeader from "../ui/WelcomeHeader";

interface Props {}

const SignIn: FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeHeader/>
    </SafeAreaView>
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

export default SignIn;
