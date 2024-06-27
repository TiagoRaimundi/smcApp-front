import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPassowrd from '@views/ForgetPassword';
import SignIn from '@views/SignIn';
import SignUp from '@views/SignUp';
import {FC} from 'react';
import {View, StyleSheet} from 'react-native';

export type AuthStackParamList = {
    SignIn: undefined
    SignUp: undefined
    ForgetPassword: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()
interface Props {}


const AuthNavigator: FC<Props> = (props) => {
  return   <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
  <Stack.Screen name="SignIn" component={SignIn}/>
  <Stack.Screen name="SignUp" component={SignUp}/>
  <Stack.Screen name="ForgetPassword" component={ForgetPassowrd}/>
</Stack.Navigator>
 }
 
 const styles = StyleSheet.create({
   container: {} 
}) 
  
export default AuthNavigator; 