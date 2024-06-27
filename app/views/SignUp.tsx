import { FC } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import WelcomeHeader from "../ui/WelcomeHeader";
import FormInput from "../ui/FormInput";
import AppButton from "@ui/AppButton";
import FormDivider from "@ui/FormDivider";
import FormNavigator from "@ui/FormNavigator";

interface Props {}

const SignUp: FC<Props> = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={50}
    >
      <ScrollView>
        <View style={styles.innerContainer}>
          <WelcomeHeader />
          <View style={styles.formContainer}>
          <FormInput
              placeholder="Name"
            />
            <FormInput
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <FormInput placeholder="Password" secureTextEntry />

            <AppButton title="Sign up" />
            <FormDivider />
            <FormNavigator leftTitle="Forget Password" rigthTitle="Sign In" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 15,
    flex: 1,
  },
  formContainer: {
    marginTop: 30,
  },
});

export default SignUp;
