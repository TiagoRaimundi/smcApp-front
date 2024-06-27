import { FC } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
import WelcomeHeader from "../ui/WelcomeHeader";
import FormInput from "../ui/FormInput";
import AppButton from "@ui/AppButton";
import FormDivider from "@ui/FormDivider";

interface Props {}

const SignIn: FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeHeader />
      <View style={styles.formContainer}>
        <FormInput placeholder="Email" keyboardType="email-address" autoCapitalize="none"/>
        <FormInput placeholder="Password" secureTextEntry/>

        <AppButton title="Sign in"/>
        <FormDivider/>
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
