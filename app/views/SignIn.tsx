import { FC } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";
import WelcomeHeader from "../ui/WelcomeHeader";
import colors from "../utils/colors";
import FormInput from "../ui/FormInput";

interface Props {}

const SignIn: FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeHeader />
      <View style={styles.formContainer}>
        <FormInput placeholder="Email" keyboardType="email-address" autoCapitalize="none"/>
        <FormInput placeholder="Password" secureTextEntry/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  formContainer: {
    marginTop: 30,
  },
});

export default SignIn;
