import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '@utils/colors';
import ForgetPassowrd from '@views/ForgetPassword';
import SignIn from '@views/SignIn';
import SignUp from '@views/SignUp';
import {FC} from 'react';
import { StyleSheet} from 'react-native';
import AuthNavigator from './AuthNavigator';


const Stack = createNativeStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  }
}

interface Props {}

const Navigator: FC<Props> = (props) => {
  return   <NavigationContainer theme={MyTheme}>
    <AuthNavigator/>
</NavigationContainer>
 }
 
 const styles = StyleSheet.create({
   container: {} 
}) 
  
export default Navigator; 