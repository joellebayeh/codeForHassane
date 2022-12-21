import {NavigationContainer} from '@react-navigation/native';

import LoginNavigator from './LoginNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavigator = () => {
  const token = true;
  return (
    <NavigationContainer>
      {token ? <DrawerNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
