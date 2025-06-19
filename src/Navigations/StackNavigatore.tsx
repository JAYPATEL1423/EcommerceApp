import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/AuthScreens/SignupScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen';
const Stack = createStackNavigator();

function StackNavigatore() {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signup" component={SignupScreen}></Stack.Screen>
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigatore;
