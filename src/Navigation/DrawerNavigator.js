import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Logout from '@screens/Logout/Logout';
import Profile from '@screens/Profile/Profile';
import TabNavigator from './TabNavigator';
import Referral from '@screens/Referral/Referral';
import ChangePassword from '@screens/changePassword/changePassword';
import CustomDrawerHeader from '@components/Headers/CustomDrawerHeader';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    // <NavigationContainer>

    <Drawer.Navigator
      initialRouteName="TabNavigator"
      drawerContent={({navigation}) => (
        <CustomDrawerHeader navigation={navigation} />
      )}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Referral"
        component={Referral}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default DrawerNavigator;
