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
import CustomKeyAvoidingView from "@ui/KeyboardAvoidingView";

interface Props {}

const SignIn: FC<Props> = (props) => {
  return (
<CustomKeyAvoidingView>
<View style={styles.innerContainer}>
          <WelcomeHeader />
          <View style={styles.formContainer}>
            <FormInput
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <FormInput placeholder="Password" secureTextEntry />

            <AppButton title="Sign in" />
            <FormDivider />
            <FormNavigator leftTitle="Forget Password" rigthTitle="Sign In" />
          </View>
        </View>
</CustomKeyAvoidingView>
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

export default SignIn;
