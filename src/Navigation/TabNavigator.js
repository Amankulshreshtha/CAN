import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CalendarScreen from '@screens/Calendar/CalendarScreen';
import Forum from '@screens/Forum/Forum';
import Home from '@screens/Home/Home';
import Chat from '@screens/Chat/Chat';
import Portfolio from '@screens/Portfolio/Portfolio';
import {NavigationContainer} from '@react-navigation/native';
import IMAGES from '@assets/Image';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={IMAGES.CalanderIcon} />,
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={IMAGES.Forum} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={IMAGES.Home} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={IMAGES.Chat} />,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={IMAGES.Portfolio} />,
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default TabNavigator;
