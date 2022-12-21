import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const OneStack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <OneStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <OneStack.Screen name="Login" component={LoginScreen} />
    </OneStack.Navigator>
  );
};

export default LoginNavigator;
