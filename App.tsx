import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import SignIn from './app/views/SignIn';
import SignUp from '@views/SignUp';
import ForgetPassowrd from '@views/ForgetPassword';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ForgetPassowrd/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
