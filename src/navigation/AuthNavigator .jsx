import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignUPScreen';
import ForgotPasswordScreen from '../screens/auth/ForgetPasswrodScreen';
import WelcomScreen from '../screens/auth/WelcomScreen';
import OtpScreen  from '../screens/auth/OtpScreen';
const Stack = createNativeStackNavigator();

const  AuthNavigator  =  ()=> {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcom" component={WelcomScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTP" component={OtpScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator  