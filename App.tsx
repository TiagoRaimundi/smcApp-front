import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import SignIn from './app/views/SignIn';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignIn/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
