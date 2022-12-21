import {SafeAreaView, Button, View} from 'react-native';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';

import ScreensNavigator from './ScreensNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
              <View>
                <DrawerItemList {...props} />
              </View>
              <View style={{marginHorizontal: 80, borderColor: 'black'}}>
                <Button title="Logout" color="red" onPress={() => {}} />
              </View>
            </SafeAreaView>
          </View>
        );
      }}>
      <Drawer.Screen name="Articles" component={ScreensNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
