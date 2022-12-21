import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArticlesScreen from '../screens/ArticlesScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'red' : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'red',
};

const ScreenStack = createNativeStackNavigator();

const ScreensNavigator = () => {
  return (
    <ScreenStack.Navigator
      nitialRouteName="Articles"
      screenOptions={{
        headerShown: false,
      }}>
      <ScreenStack.Screen name="Articles" component={ArticlesScreen} />
    </ScreenStack.Navigator>
  );
};

export default ScreensNavigator;
